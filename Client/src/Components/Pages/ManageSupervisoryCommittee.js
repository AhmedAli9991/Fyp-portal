import React, { useEffect, useState } from "react";
import { progressData, supervisorData } from "../DummyData/DummyData";
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
import adminService from "../../API/admin";
import facultyService from "../../API/faculty";
import { useFormik } from "formik";
import studentService from "../../API/students";

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

export default function ManageSupervisoryCommittee() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [supervisoryCommittee, setSupervisoryCommittee] = useState([]);
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [committeeId, setCommitteeId] = useState("");

  // async function facultyData() {
  //   const res = await facultyService.getSingleFaculty();
  //   supervisoryCommittee
  // }
  const getSupervisors = async () => {
    let data = await studentService.getSupervisors();

    console.table("SubmissionM", data?.supervisors);
    setSupervisors(data?.supervisors);
  };
  async function fetchData() {
    const res = await adminService.getSupervisoryCommittee();

    console.log("reshere", res);

    const committeeData = res.data.map((data) => data.committee);
    const committeeD = committeeData.map((data) => data.username);

    const data = res?.data?.map((res) => {
      let d = res?.committee.map((data) => data.username);

      return {
        RegistrationNo: res.student_id?.registrationNo,
        StudentName: res.student_id?.username,
        FacultyMembers: d,
        // FacultyMembers: ,
        id: res?._id,
      };
    });

    setCommitteeMembers(committeeData);
    /* setReportData({
      ...reportData,
      student_id: res?.student_id,
      session_id: res?.session_id,
      status: res?.status,
      comment: res?.comment,
      id: res?._id,
    }); */
    setSupervisoryCommittee(data);
  }
  useEffect(() => {
    getSupervisors();
    fetchData();
  }, []);

  console.log("supervisory data", supervisoryCommittee);
  console.log("committee data", committeeMembers);

  const supervisorHeader = [
    // {
    //   field: "id",
    //   headerName: "ID",
    //   width: 80,
    // },
    { field: "RegistrationNo", headerName: "Registration No.", width: 150 },
    { field: "StudentName", headerName: "Student Name", width: 150 },
    { field: "FacultyMembers", headerName: "Faculty Members", width: 450 },
    // { field: "Comments", headerName: "Designation", width: 200 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => (
        <>
          <Button
            onClick={async () => {
              const res = await adminService.deleteSupervisoryCommittee(
                props.row.id
              );
              fetchData();
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
              console.log(props.row);
              setCommitteeId(props.row.id);
              // setselectedobj(props.row);
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
  // console.log(supervisoryCommittee[0].StudentName);
  const formik = useFormik({
    initialValues: {
      studentName: supervisoryCommittee.StudentName,
      regestrationNo: supervisoryCommittee.RegistrationNo,
      committeeMember1: "",
      committeeMember2: "",
      committeeMember3: "",
      committee: [],
    },
    /* validationSchema: validationSchema, */
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values);
      formik.values.committee.push(formik.values.committeeMember1);
      formik.values.committee.push(formik.values.committeeMember2);
      formik.values.committee.push(formik.values.committeeMember3);
      // formik.values.committee.map(())
      let res = await adminService.updateSupervisoryCommittee(
        values.committee,
        committeeId
      );
      if (res.status === 200) {
        setShowUpdateModal(true);
        fetchData();
        console.log(res);
      } else {
      }
      console.log(res);
    },
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={formik.handleSubmit}>
          <TextField
            color="secondary"
            label="Student Name"
            name="studentName"
            variant="standard"
            defaultValue={formik.values.studentName}
            sx={{ width: "100%", marginBottom: "15px" }}
            // value={formik.values.studentName}
            onChange={formik.handleChange}
          />
          <FormControl
            color="secondary"
            fullWidth
            sx={{ marginBottom: "15px" }}
          >
            <InputLabel>Faculty Member</InputLabel>
            <Select
              variant="standard"
              label="Faculty Member"
              name="committeeMember1"
              value={formik.values.committeeMember1}
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
          <FormControl
            color="secondary"
            fullWidth
            sx={{ marginBottom: "15px" }}
          >
            <InputLabel>Faculty Member</InputLabel>
            <Select
              variant="standard"
              label="Faculty Member"
              name="committeeMember2"
              value={formik.values.committeeMember2}
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
          <FormControl
            color="secondary"
            fullWidth
            sx={{ marginBottom: "15px" }}
          >
            <InputLabel>Faculty Member</InputLabel>
            <Select
              variant="standard"
              label="Faculty Member"
              name="committeeMember3"
              value={formik.values.committeeMember3}
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

          <Box>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ mt: 1.5 }}
              /* onClick={(event) => {
                // updateProgram();
              }} */
            >
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
      <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
        <DataTable header={supervisorHeader} data={supervisoryCommittee} />
      </div>
      <BackdropModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        title={"Delete!"}
      >
        The Session has been Deleted.
      </BackdropModal>
      <BackdropModal
        showModal={showUpdateModal}
        setShowModal={setShowUpdateModal}
        title={"Update!"}
      >
        The Session has been Updated.
      </BackdropModal>
    </>
  );
}
