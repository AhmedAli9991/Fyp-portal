import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import studentService from "../../API/students";
import sessionsService from "../../API/sessions";
import progressReportService from "../../API/progressReports";
import BackdropModal from "../UI/BackdropModal";
import { useFormik } from "formik";
import * as yup from "yup";

export default function AddProgressReport() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const studs = await studentService.getStudents();
      const sess = await sessionsService.getSessions();
      console.log("Students", studs);
      setStudents(studs);
      setSessions(sess);
    }
    fetchData();
  }, []);

  const validationSchema = yup.object({
    student_id: yup.string().required(),
    session_id: yup.string().required(),
    status: yup.string().required(),
    comment: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      student_id: "",
      session_id: "",
      status: "",
      comment: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await progressReportService.addProgressReport(values);

      console.log(res);
      if (res.status === 200) {
        setShowAddModal(true);
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <FormControl color="secondary" fullWidth>
        <InputLabel>Student</InputLabel>
        <Select
          sx={{ marginBottom: "15px" }}
          label="Student"
          name="student_id"
          value={formik.values.student_id}
          onChange={formik.handleChange}
          error={formik.touched.student_id && Boolean(formik.errors.student_id)}
          helperText={formik.touched.student_id && formik.errors.student_id}
        >
          {students.map((oneStudent) => (
            <MenuItem value={oneStudent._id}>
              {oneStudent.registrationNo}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl color="secondary" fullWidth>
        <InputLabel>Session</InputLabel>
        <Select
          sx={{ marginBottom: "15px" }}
          label="Session"
          name="session_id"
          value={formik.values.session_id}
          onChange={formik.handleChange}
          error={formik.touched.session_id && Boolean(formik.errors.session_id)}
          helperText={formik.touched.session_id && formik.errors.session_id}
        >
          {sessions.map((oneSession) => (
            <MenuItem selected="selected" value={oneSession._id}>
              {oneSession.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            error={formik.touched.status && Boolean(formik.errors.status)}
            helperText={formik.touched.status && formik.errors.status}
          >
            <MenuItem value="Satisfactory">Satisfactory</MenuItem>
            <MenuItem value="Unsatisfactory">Unsatisfactory</MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="Excellent">Excellent</MenuItem>
            <MenuItem value="Absent">Absent</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        multiline
        color="secondary"
        fullWidth
        sx={{ marginBottom: "15px" }}
        label="Comment"
        name="comment"
        rows={6}
        value={formik.values.comment}
        onChange={formik.handleChange}
        error={formik.touched.comment && Boolean(formik.errors.comment)}
        helperText={formik.touched.comment && formik.errors.comment}
      />

      <Button type="submit" variant="contained" color="secondary" size="large">
        Add Progress Report
      </Button>
      <BackdropModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        title={"Add!"}
      >
        Progress report has been Added.
      </BackdropModal>
    </Box>
  );
}
