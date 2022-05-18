import {
  TextField,
  Button,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import studentService from "../../API/students";
import synopsisService from "../../API/synopsis";

export default function SynopsisSubmission() {
  const [supervisors, setSupervisors] = useState([]);
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);

  const getSupervisors = async () => {
    let data = await studentService.getSupervisors();
    console.table("SubmissionM", data?.supervisors);
    setSupervisors(data?.supervisors);
  };

  useEffect(() => {
    getSupervisors();
  }, []);

  const validationSchema = yup.object({
    synopsisTitle: yup.string(),
    supervisor: yup.string(),
    coSupervisor: yup.string(),
    synopsisTrack: yup.string(),
    synopsisDocument: yup.string(),

    synopsisPresentation: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      synopsisTitle: "",
      supervisor: "",
      coSupervisor: "",
      synopsisTrack: "",
      synopsisDocument: [],
      synopsisPresentation: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      let formData = new FormData();
      formData.append("synopsisTitle", values.synopsisTitle);
      formData.append("supervisor", values.supervisor);
      formData.append("coSupervisor", values.coSupervisor);
      formData.append("synopsisTrack", values.synopsisTrack);
      formData.append("synopsisDocument", values.synopsisDocument[0]);
      formData.append("synopsisPresentation", values.synopsisPresentation[0]);
      // console.log(values);
      let res = await synopsisService.submitSynopsis(formData);
      if (res?.status === 500) {
        setError(res.data.message);
        setIsError(true);
        console.log(res);
      } else {
        setIsError(false);
      }
      console.log(res);
      // studentService.uploadFile(formData);
    },
  });

  return (
    <Box
      component="form"
      encType="multipart/form-data"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        id="standard-basic"
        sx={{
          width: "100%",
          marginBottom: "15px",
        }}
        name="synopsisTitle"
        label="Synopsis Title"
        color="secondary"
        variant="outlined"
        value={formik.values.synopsisTitle}
        onChange={formik.handleChange}
      />
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="supervisor"
            label="Supervisor"
            value={formik.values.supervisor}
            onChange={formik.handleChange}
          >
            {supervisors?.map((item) => {
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
            value={formik.values.coSupervisor}
            onChange={formik.handleChange}
            label="Co-Supervisor"
          >
            {supervisors?.map((item) => {
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
        name="synopsisTrack"
        label="Synopsis Track"
        color="secondary"
        variant="outlined"
        value={formik.values.synopsisTrack}
        onChange={formik.handleChange}
      />
      <div className="col-md-12">
        <div className="mt-4">Synopsis Document:</div>
        <input
          className=" form-control-sm  col-md-10 col-sm-8"
          type="file"
          name="synopsisDocument"
          min={1}
          onChange={(event) => {
            formik.setFieldValue("synopsisDocument", event.currentTarget.files);
          }}
        />
        <div className="col-md-2 col-sm-4 mt-4">Synopsis Presentation :</div>
        <input
          className=" form-control-sm  col-md-10 col-sm-8"
          type="file"
          min={1}
          name="synopsisPresentation"
          onChange={(event) => {
            formik.setFieldValue("synopsisPresentation", event.target.files);
          }}
        />
      </div>
      <span style={{ color: "red" }}>{isError && error}</span>
      <Button
        type="submit"
        sx={{ ml: "80%", mt: "20px" }}
        variant="contained"
        size="large"
        color="secondary"
      >
        Submit
      </Button>
    </Box>
  );
}
