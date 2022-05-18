import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { FormLabel, Radio, RadioGroup } from "@mui/material";
import { useFormik } from "formik";
import authSlice, { Signup } from "../../Store/authSlice";

import * as yup from "yup";
import programsService from "../../API/programs";
import sessionsService from "../../API/sessions";
import studentService from "../../API/students";
import { useDispatch, useSelector } from "react-redux";
import BackdropModal from "../UI/BackdropModal";

export default function AddStudent() {
  const { success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);

  const [studentType, setStudentType] = useState("MS");
  const [sessions, setSessions] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [supervisors, setSupervisors] = useState([]);

  const msdValidationSchema = yup.object({
    registrationNo: yup.string().required(),
    username: yup.string().required(),
    fatherName: yup.string().required(),
    email: yup.string().required(),
    mobile: yup.number().required(),
    supervisor_id: yup.string().required(),
    coSupervisor_id: yup.string().required(),
    program_id: yup.string().required(),
    thesisRegistration: yup.string().required(),
  });
  const phdValidationSchema = yup.object({
    registrationNo: yup.string().required(),
    username: yup.string().required(),
    fatherName: yup.string().required(),
    email: yup.string().required(),
    mobile: yup.number().required(),
    supervisor_id: yup.string().required(),
    coSupervisor_id: yup.string().required(),
    program_id: yup.string().required(),
    thesisRegistration: yup.string().required(),
    totalPublications: yup.number().required(),
    impactFactorPublications: yup.number().required(),
    thesisTrack: yup.string().required(),
  });

  const [selectedSchema, setSelectedSchema] = useState(msdValidationSchema);

  console.log(selectedSchema);

  const formik = useFormik({
    initialValues: {
      registrationNo: "",
      username: "",
      fatherName: "",
      password: "dummy",
      email: "",
      mobile: "",
      supervisor_id: "",
      coSupervisor_id: "",
      userRole: "STUDENT",
      program_id: "",
      thesisRegistration: "",
      thesisTrack: "",
      totalPublications: "",
      impactFactorPublications: "",
    },
    enableReinitialize: true,
    validationSchema: selectedSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(Signup(values));
      setShowAddModal(true);
    },
  });

  useEffect(() => {
    async function getData() {
      const prog = await programsService.getPrograms();
      const sess = await sessionsService.getSessions();
      let data = await studentService.getSupervisors();

      setSupervisors(data.supervisors);
      setSessions(sess);
      setPrograms(prog);
    }
    getData();
  }, []);

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
      <FormControl sx={{ mb: 1 }}>
        <FormLabel color="secondary">Student</FormLabel>
        <RadioGroup
          row
          name="studentType"
          value={studentType}
          onChange={(e) => {
            setStudentType(e.target.value);
            if (e.target.value === "MS") {
              setSelectedSchema(msdValidationSchema);
            } else {
              setSelectedSchema(phdValidationSchema);
            }
          }}
        >
          <FormControlLabel
            value="MS"
            control={<Radio color="secondary" />}
            label="MS"
          />
          <FormControlLabel
            value="PhD"
            control={<Radio color="secondary" />}
            label="PhD"
          />
        </RadioGroup>
      </FormControl>
      <TextField
        id="standard-basic"
        sx={{
          width: "100%",
          marginBottom: "15px",
        }}
        label="Registration No."
        color="secondary"
        variant="outlined"
        name="registrationNo"
        value={formik.values.registrationNo}
        onChange={formik.handleChange}
        error={
          formik.touched.registrationNo && Boolean(formik.errors.registrationNo)
        }
        helperText={
          formik.touched.registrationNo && formik.errors.registrationNo
        }
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Name"
        color="secondary"
        variant="outlined"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Father Name"
        color="secondary"
        variant="outlined"
        name="fatherName"
        value={formik.values.fatherName}
        onChange={formik.handleChange}
        error={formik.touched.fatherName && Boolean(formik.errors.fatherName)}
        helperText={formik.touched.fatherName && formik.errors.fatherName}
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Email"
        color="secondary"
        variant="outlined"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Mobile"
        color="secondary"
        variant="outlined"
        name="mobile"
        value={formik.values.mobile}
        onChange={formik.handleChange}
        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
        helperText={formik.touched.mobile && formik.errors.mobile}
      />
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Program</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Program"
            name="program_id"
            value={formik.values.program_id}
            onChange={formik.handleChange}
            error={
              formik.touched.program_id && Boolean(formik.errors.program_id)
            }
            helperText={formik.touched.program_id && formik.errors.program_id}
          >
            {programs?.map((program) => (
              <MenuItem value={program._id}>
                {program.programShortName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Supervisor"
            name="supervisor_id"
            value={formik.values.supervisor_id}
            onChange={formik.handleChange}
            error={
              formik.touched.supervisor_id &&
              Boolean(formik.errors.supervisor_id)
            }
            helperText={
              formik.touched.supervisor_id && formik.errors.supervisor_id
            }
          >
            {supervisors?.map((supervisor) => (
              <MenuItem value={supervisor._id}>{supervisor.username}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Co-Supervisor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Co-Supervisor"
            name="coSupervisor_id"
            value={formik.values.coSupervisor_id}
            onChange={formik.handleChange}
            error={
              formik.touched.coSupervisor_id &&
              Boolean(formik.errors.coSupervisor_id)
            }
            helperText={
              formik.touched.coSupervisor_id && formik.errors.coSupervisor_id
            }
          >
            {supervisors?.map((supervisor) => (
              <MenuItem value={supervisor._id}>{supervisor.username}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Thesis Registration"
        color="secondary"
        variant="outlined"
        name="thesisRegistration"
        value={formik.values.thesisRegistration}
        onChange={formik.handleChange}
        error={
          formik.touched.thesisRegistration &&
          Boolean(formik.errors.thesisRegistration)
        }
        helperText={
          formik.touched.thesisRegistration && formik.errors.thesisRegistration
        }
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Thesis Track"
        color="secondary"
        variant="outlined"
        name="thesisTrack"
        value={formik.values.thesisTrack}
        onChange={formik.handleChange}
        error={formik.touched.thesisTrack && Boolean(formik.errors.thesisTrack)}
        helperText={formik.touched.thesisTrack && formik.errors.thesisTrack}
      />
      {studentType === "PhD" && (
        <>
          <TextField
            id="standard-basic"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Total Publication (during PhD)"
            color="secondary"
            name="totalPublications"
            variant="outlined"
            value={formik.values.totalPublications}
            onChange={formik.handleChange}
            error={
              formik.touched.totalPublications &&
              Boolean(formik.errors.totalPublications)
            }
            helperText={
              formik.touched.totalPublications &&
              formik.errors.totalPublications
            }
          />
          <TextField
            id="standard-basic"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Impact Factor Publications (after synopsis approval)"
            name="impactFactorPublications"
            color="secondary"
            variant="outlined"
            value={formik.values.impactFactorPublications}
            onChange={formik.handleChange}
            error={
              formik.touched.impactFactorPublications &&
              Boolean(formik.errors.impactFactorPublications)
            }
            helperText={
              formik.touched.impactFactorPublications &&
              formik.errors.impactFactorPublications
            }
          />
        </>
      )}
      <Button type="submit" variant="contained" size="large" color="secondary">
        Add Student
      </Button>
      <BackdropModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        title={"Add!"}
      >
        Student has been Added.
      </BackdropModal>
    </Box>
  );
}
