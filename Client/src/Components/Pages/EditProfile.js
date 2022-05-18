import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import studentService from "../../API/students";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";

export default function EditProfile() {
  const { user } = useSelector((state) => state.auth);
  const [supervisors, setSupervisors] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const userProgram = user.user.student.program_id.programShortName;

  /*   const validationSchema = yup.object({
    firstName: yup.string(),
    lastName: yup.string(),
    fullName: yup.string(),
    fatherName: yup.string(),
    email: yup.string(),
    designation: yup.string(),
    department: yup.string(),
    campus: yup.string(),
  }); */

  const formik = useFormik({
    initialValues: {
      name: "",
      fatherName: "",

      password: "dummy",
      mobile: "",
      supervisor: "",
      coSupervisor: "",
      synopsisTitle: "",
      track: "",
      thesisRegistration: "",
      totalPublications: "",
      impactFactorPublications: "",
      thesisTrack: "",
      profilePic: [],
    },
    /* validationSchema: validationSchema, */
    onSubmit: async (values) => {
      let formData = new FormData();

      formData.append("name", values.name);
      formData.append("fatherName", values.fatherName);
      formData.append("mobile", values.mobile);
      formData.append("supervisor", values.supervisor);
      formData.append("coSupervisor", values.coSupervisor);
      formData.append("synopsisTitle", values.synopsisTitle);
      formData.append("track", values.track);
      formData.append("thesisRegistration", values.thesisRegistration);
      formData.append("thesisTrack", values.thesisTrack);
      formData.append("profilePic", values.profilePic[0]);

      if (userProgram.toLowerCase().includes("phd")) {
        formData.append("totalPublications", values.totalPublications);
        formData.append(
          "impactFactorPublications",
          values.impactFactorPublications
        );
      }

      for (var value of formData.values()) {
        console.log(value);
      }
      let res = await studentService.updateProfile(formData);
      if (res?.status === 500) {
        setError(res.data.message);
        setIsError(true);
        console.log(res);
      } else {
        setIsError(false);
      }
      console.log(res);
    },
  });

  const getSupervisors = async () => {
    let data = await studentService.getSupervisors();

    console.table("SubmissionM", data?.supervisors);
    setSupervisors(data?.supervisors);
  };
  useEffect(() => {
    getSupervisors();
  }, []);

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Name"
        name="name"
        color="secondary"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
      />

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Father's Name"
        name="fatherName"
        color="secondary"
        variant="outlined"
        value={formik.values.fatherName}
        onChange={formik.handleChange}
      />

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Mobile"
        name="mobile"
        color="secondary"
        variant="outlined"
        value={formik.values.mobile}
        onChange={formik.handleChange}
      />
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Program}
            name="supervisor"
            label="Supervisor"
            //onChange={handleChange}
            value={formik.values.supervisor}
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

      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Co-Supervisor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="coSupervisor"
            label="Co-Supervisor"
            value={formik.values.coSupervisor}
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

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Synopsis Title"
        color="secondary"
        name="synopsisTitle"
        variant="outlined"
        value={formik.values.synopsisTitle}
        onChange={formik.handleChange}
      />

      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Program</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="track"
            label="Track"
            value={formik.values.track}
            onChange={formik.handleChange}
          >
            <MenuItem value={""} disabled>
              N/A
            </MenuItem>
            <MenuItem value={"Regular"}>Regular</MenuItem>
            <MenuItem value={"Publication"}>Publication</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Thesis Registration"
        color="secondary"
        name="thesisRegistration"
        variant="outlined"
        value={formik.values.thesisRegistration}
        onChange={formik.handleChange}
      />

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Thesis Track"
        name="thesisTrack"
        color="secondary"
        variant="outlined"
        value={formik.values.thesisTrack}
        onChange={formik.handleChange}
      />

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Area of Specialization"
        name="specialization"
        color="secondary"
        variant="outlined"
        value={formik.values.specialization}
        onChange={formik.handleChange}
      />

      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">
            Comprehensive Passing Semester
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="passingSemester"
            label="Comprehensive Passing Semester"
            value={formik.values.passingSemester}
            onChange={formik.handleChange}
          >
            <MenuItem value="" disabled>
              N/A
            </MenuItem>
            <MenuItem value="SP11">SP11</MenuItem>
            <MenuItem value="FA11">FA11</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {userProgram.toLowerCase().includes("phd") && (
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
          />
        </>
      )}
      <label style={{ display: "flex", flexDirection: "column" }}>
        <div>Edit Profile Picture:</div>

        <input
          style={{ margin: ".5rem" }}
          type="file"
          min={1}
          name="profilePic"
          onChange={(e) => {
            formik.setFieldValue("profilePic", e.target.files);
          }}
        />
        {}
      </label>

      <Button type="submit" variant="contained" size="large" color="secondary">
        Update Profile
      </Button>
    </Box>
  );
}
