import React, { useEffect, useState } from "react";
import DataTable from "../UI/TableUI";
import axios from "axios";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import progressReportService from "../../API/progressReports";
import BackdropModal from "../UI/BackdropModal";
import { useFormik } from "formik";

export default function ManageProgressReport() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [progressReportId, setProgressReportId] = useState("");
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [reports, setReports] = useState([]);
  const [reportData, setReportData] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function fetchData() {
    const res = await progressReportService.getReports();

    console.log("reshere", res);
    const data = res?.data?.map((res) => ({
      Student: res.student_id?.username,
      Session: res.session_id?.title,
      Status: res?.status,
      Comment: res?.comment,
      id: res?._id,
    }));
    setReportData({
      ...reportData,
      student_id: res?.student_id,
      session_id: res?.session_id,
      status: res?.status,
      comment: res?.comment,
      id: res?._id,
    });
    setReports(data);
    console.log("Progress Report data", data);
  }
  useEffect(() => {
    fetchData();
    const user = JSON.parse(localStorage.getItem("user"));

    var { token } = user;
    console.log(token);
    setToken(token);
  }, []);

  const formik = useFormik({
    initialValues: {
      student_id: reportData.student_id,
      session_id: reportData.session_id,
      comment: reportData.comment,
      status: reportData.status,
    },
    /* validationSchema: validationSchema, */
    onSubmit: async (values) => {
      let res = await progressReportService.updateProfile(values);
      if (res.status === 200) {
        setShowUpdateModal(true);

        console.log(res);
      } else {
      }
      console.log(res);
    },
  });

  const progressHeader = [
    {
      field: "Student",
      headerName: "Student",
      width: 200,
    },
    { field: "Session", headerName: "Session", width: 200 },
    { field: "Status", headerName: "Status", width: 200 },
    { field: "Comment", headerName: "Comment", width: 400 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => (
        <>
          <Button
            onClick={() => {
              axios
                .delete(
                  `${process.env.REACT_APP_URL}/progress-report/delete/` +
                    props.row.id,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data.msg);

                  if (res.status === 200) {
                    setShowDeleteModal(true);
                  }
                })
                .catch((err) => console.log(err));
              fetchData();
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
              handleOpen();
              setProgressReportId(props.row.id);
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

  const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextField
            color="secondary"
            label="Student"
            name="student_id"
            variant="standard"
            sx={{ width: "100%", marginBottom: "15px" }}
            value={formik.values.synopsisTitle}
            onChange={formik.handleChange}
          />

          <TextField
            color="secondary"
            label="Session"
            name="session_id"
            variant="standard"
            sx={{ width: "100%", marginBottom: "15px" }}
            value={formik.values.synopsisTitle}
            onChange={formik.handleChange}
          />

          <TextField
            variant="standard"
            color="secondary"
            fullWidth
            sx={{ marginBottom: "15px" }}
            label="Comment"
            name="comment"
            multiline
            maxRows={8}
            value={formik.values.synopsisTitle}
            onChange={formik.handleChange}
          />

          <Box>
            <FormControl
              color="secondary"
              fullWidth
              sx={{ marginBottom: "15px" }}
            >
              <InputLabel>Status</InputLabel>
              <Select
                variant="standard"
                label="Status"
                name="status"
                value={formik.values.synopsisTitle}
                onChange={formik.handleChange}
              >
                <MenuItem value="Satisfactory">Satisfactory</MenuItem>
                <MenuItem value="Unsatisfactory">Unsatisfactory</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
                <MenuItem value="Excellent">Excellent</MenuItem>
                <MenuItem value="Absent">Absent</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              onClick={async () => {
                try {
                  let res = await progressReportService.updateProgressReport(
                    formik.values,
                    progressReportId
                  );
                  console.log(res);
                  if (res.status === 200) {
                    setShowUpdateModal(true);

                    console.log(res);
                  }
                } catch (error) {
                  console.log(error);
                }
                fetchData();
              }}
            >
              Update Progress Report
            </Button>
          </Box>
        </Box>
      </Modal>
      <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
        <DataTable header={progressHeader} data={reports} />
      </div>
      <BackdropModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        title={"Delete!"}
      >
        The Report has been Deleted.
      </BackdropModal>
      <BackdropModal
        showModal={showUpdateModal}
        setShowModal={setShowUpdateModal}
        title={"Update!"}
      >
        The Report has been Updated.
      </BackdropModal>
    </>
  );
}
