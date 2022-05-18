import React, { useEffect, useState } from "react";
import { studentData } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import BackdropModal from "../UI/BackdropModal";
import studentService from "../../API/students";
import { useFormik } from "formik";
import sessionsService from "../../API/sessions";
import programsService from "../../API/programs";
import adminService from "../../API/admin";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  /* gap: ".5rem", */
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",

  /* border: "2px solid #000", */
  boxShadow: 24,
  p: 4,
};

export default function ManageStudent() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [students, setStudents] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedStudent, setselectedStudent] = useState({});

  const getSupervisors = async () => {
    let data = await studentService.getSupervisors();

    console.table("SubmissionM", data?.supervisors);
    setSupervisors(data?.supervisors);
  };
  const getPrograms = async () => {
    let data = await programsService.getPrograms();
    console.log(data);
    setPrograms(data);
  };

  async function getData() {
    const res = await studentService.getStudents();
    console.log(res);

    let data = res.map((stud) => ({
      Name: stud?.username,
      RegistrationNo: stud?.registrationNo,
      Email: stud?.email,
      id: stud?._id,
      Program: stud?.program_id?.programShortName,
      data: stud,
    }));
    setStudents(data);
  }

  useEffect(() => {
    getData();
    getSupervisors();
    getPrograms();
  }, []);

  const studentHeader = [
    {
      field: "Name",
      headerName: "Name",
      width: 150,
    },
    { field: "RegistrationNo", headerName: "Registration No.", width: 150 },
    { field: "Email", headerName: "Email", width: 350 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => (
        <>
          <Button
            onClick={async () => {
              console.log(props.row);
              const res = await studentService.deleteStudent(props.row.id);

              getData();
              if (res.status === 200) {
                setShowDeleteModal(true);
              }
            }}
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 0 }}
          >
            Delete
          </Button>

          <Button
            onClick={() => {
              setselectedStudent(props.row);
              handleOpen();
            }}
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 10 }}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];

  const formik = useFormik({
    initialValues: {
      registrationNo: selectedStudent?.data?.registrationNo,
      username: selectedStudent?.data?.username,
      fatherName: selectedStudent?.data?.fatherName,
      email: selectedStudent?.data?.email,
      mobile: selectedStudent?.data?.mobile,
      supervisor_id: selectedStudent?.data?.supervisor_id?._id,
      coSupervisor_id: selectedStudent?.data?.coSupervisor_id?._id,
      program_id: selectedStudent?.data?.program_id?._id,
      thesisRegistration: selectedStudent?.data?.thesisRegistration,
      thesisTrack: selectedStudent?.data?.thesisTrack,
      totalPublications: selectedStudent?.data?.totalPublications,
      impactFactorPublications: selectedStudent?.data?.impactFactorPublications,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      let res = await adminService.updateStudent(values, selectedStudent.id);
      if (res.status === 200) {
        setShowUpdateModal(true);

        console.log(res);
      } else {
      }
      console.log(res);
    },
  });

  console.log(selectedStudent);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component="form" onSubmit={formik.handleSubmit}>
          <Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Box sx={{ width: "50%" }}>
                <TextField
                  sx={{
                    width: "100%",
                    marginBottom: "5px",
                  }}
                  label="Registration No."
                  name="registrationNo"
                  color="secondary"
                  variant="standard"
                  value={formik.values.registrationNo}
                  onChange={formik.handleChange}
                />

                <TextField
                  sx={{ width: "100%", marginBottom: "5px" }}
                  label="Name"
                  name="username"
                  color="secondary"
                  variant="standard"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                <TextField
                  sx={{ width: "100%", marginBottom: "5px" }}
                  label="Father Name"
                  name="fatherName"
                  color="secondary"
                  variant="standard"
                  value={formik.values.fatherName}
                  onChange={formik.handleChange}
                />
                <TextField
                  sx={{ width: "100%", marginBottom: "5px" }}
                  label="Email"
                  name="email"
                  color="secondary"
                  variant="standard"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <TextField
                  sx={{ width: "100%", marginBottom: "5px" }}
                  label="Mobile"
                  name="mobile"
                  color="secondary"
                  variant="standard"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                />
                <Box
                  sx={{ minWidth: 120, marginBottom: "5px", marginTop: "10px" }}
                >
                  <FormControl fullWidth color="secondary">
                    <InputLabel>Program</InputLabel>
                    <Select
                      variant="standard"
                      label="Program"
                      name="program_id"
                      value={formik.values.program_id}
                      onChange={formik.handleChange}
                    >
                      {programs.map((item) => {
                        return (
                          <MenuItem key={item._id} value={item._id}>
                            {item.programShortName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{ minWidth: 120, marginBottom: "5px", marginTop: "10px" }}
                >
                  <FormControl fullWidth color="secondary">
                    <InputLabel>Supervisor</InputLabel>
                    <Select
                      variant="standard"
                      label="Supervisor"
                      name="supervisor_id"
                      value={formik.values.supervisor_id}
                      defaultValue={formik.values.supervisor_id}
                      onChange={formik.handleChange}
                    >
                      {supervisors.map((item) => {
                        return (
                          <MenuItem key={item._id} value={item._id}>
                            {item.username}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{ minWidth: 120, marginBottom: "5px", marginTop: "10px" }}
                >
                  <FormControl fullWidth color="secondary">
                    <InputLabel>Co-Supervisor</InputLabel>
                    <Select
                      variant="standard"
                      label="Co-Supervisor"
                      name="coSupervisor_id"
                      value={formik.values.coSupervisor_id}
                      onChange={formik.handleChange}
                    >
                      {supervisors.map((item) => {
                        return (
                          <MenuItem key={item._id} value={item._id}>
                            {item.username}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box sx={{ width: "50%" }}>
                <TextField
                  sx={{ width: "100%", marginBottom: "5px" }}
                  label="Thesis Registration"
                  name="thesisRegistration"
                  color="secondary"
                  variant="standard"
                  value={formik.values.thesisRegistration}
                  onChange={formik.handleChange}
                />

                <TextField
                  sx={{ width: "100%", marginBottom: "5px" }}
                  label="Thesis Track"
                  name="thesisTrack"
                  color="secondary"
                  variant="standard"
                  value={formik.values.thesisTrack}
                  onChange={formik.handleChange}
                />
                {selectedStudent?.Program?.toLowerCase().includes("phd") && (
                  <>
                    <TextField
                      sx={{ width: "100%", marginBottom: "5px" }}
                      label="Total Publications"
                      name="totalPublications"
                      color="secondary"
                      variant="standard"
                      value={formik.values.totalPublications}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      sx={{ width: "100%", marginBottom: "5px" }}
                      label="Impact Factor Publications"
                      name="impactFactorPublications"
                      color="secondary"
                      variant="standard"
                      value={formik.values.impactFactorPublications}
                      onChange={formik.handleChange}
                    />
                  </>
                )}
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ mt: 1.5 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
      <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
        <DataTable header={studentHeader} data={students} />
      </div>
      <BackdropModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        title={"Delete!"}
      >
        Student has been Deleted.
      </BackdropModal>
      <BackdropModal
        showModal={showUpdateModal}
        setShowModal={setShowUpdateModal}
        title={"Update!"}
      >
        Student has been Updated.
      </BackdropModal>
    </>
  );
}
