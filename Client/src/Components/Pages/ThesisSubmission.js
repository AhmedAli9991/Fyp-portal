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
    thesisTitle: yup.string(),
    supervisor: yup.string(),
    coSupervisor: yup.string(),
    thesisTrack: yup.string(),
    thesisDocument: yup.string(),

    synopsisNotification: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      thesisTitle: "",
      supervisor: "",
      coSupervisor: "",
      thesisTrack: "",
      thesisDocument: [],
      synopsisNotification: [],
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      let formData = new FormData();
      formData.append("thesisTitle", values.thesisTitle);
      formData.append("supervisor", values.supervisor);
      formData.append("coSupervisor", values.coSupervisor);
      formData.append("thesisTrack", values.thesisTrack);
      formData.append("thesisDocument", values.thesisDocument[0]);
      formData.append("synopsisNotification", values.synopsisNotification[0]);
      console.log(values);
      let res = await synopsisService.submitThesis(formData);
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
        name="thesisTitle"
        label="Thesis Title"
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
        name="thesisTrack"
        label="Thesis Track"
        color="secondary"
        variant="outlined"
        value={formik.values.synopsisTrack}
        onChange={formik.handleChange}
      />
      <div className="col-md-12">
        <div className="mt-4">Synopsis Approval Notification:</div>
        <input
          className=" form-control-sm  col-md-10 col-sm-8"
          type="file"
          name="synopsisNotification"
          min={1}
          onChange={(event) => {
            formik.setFieldValue(
              "synopsisNotification",
              event.currentTarget.files
            );
          }}
        />
        <div className="col-md-2 col-sm-4 mt-4">Thesis Document :</div>
        <input
          className=" form-control-sm  col-md-10 col-sm-8"
          type="file"
          min={1}
          name="thesisDocument"
          onChange={(event) => {
            formik.setFieldValue("thesisDocument", event.target.files);
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
