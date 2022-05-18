import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import * as yup from "yup";
import { useFormik } from "formik";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import programsService from "../../API/programs";

import BackdropModal from "../UI/BackdropModal";

export default function AddManageProgram() {
  const [showAddModal, setShowAddModal] = useState(false);

  const validationSchema = yup.object({
    programShortName: yup.string().required(),
    programLongName: yup.string().required(),
    description: yup.string().required(),
    minSemesters: yup.number().required(),
    maxSemesters: yup.number().required(),
    credits: yup.number().required(),
    duration: yup.string().required(),
    enable: yup.boolean().required(),
  });

  const formik = useFormik({
    initialValues: {
      programShortName: "",
      programLongName: "",
      description: "",
      minSemesters: "",
      maxSemesters: "",
      credits: "",
      duration: "",
      enable: false,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await programsService.addPrograms(values);
      // console.log(res.status);
      if (res.status === 200) {
        setShowAddModal(true);
      }
      // alert("Added");
    },
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Program"
          name="programShortName"
          variant="outlined"
          onChange={formik.handleChange}
          error={
            formik.touched.programShortName &&
            Boolean(formik.errors.programShortName)
          }
          helperText={
            formik.touched.programShortName && formik.errors.programShortName
          }
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Long Name"
          variant="outlined"
          name="programLongName"
          onChange={formik.handleChange}
          error={
            formik.touched.programLongName &&
            Boolean(formik.errors.programLongName)
          }
          helperText={
            formik.touched.programLongName && formik.errors.programLongName
          }
        />
        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Description"
          variant="outlined"
          name="description"
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginBottom: "15px" }}
          label="Min Semesters"
          variant="outlined"
          name="minSemesters"
          onChange={formik.handleChange}
          error={
            formik.touched.minSemesters && Boolean(formik.errors.minSemesters)
          }
          helperText={formik.touched.minSemesters && formik.errors.minSemesters}
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginLeft: "4%", marginBottom: "15px" }}
          label="Max Semesters"
          variant="outlined"
          name="maxSemesters"
          onChange={formik.handleChange}
          error={
            formik.touched.maxSemesters && Boolean(formik.errors.maxSemesters)
          }
          helperText={formik.touched.maxSemesters && formik.errors.maxSemesters}
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginBottom: "15px" }}
          label="Duration (Years)"
          variant="outlined"
          name="duration"
          onChange={formik.handleChange}
          error={formik.touched.duration && Boolean(formik.errors.duration)}
          helperText={formik.touched.duration && formik.errors.duration}
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginLeft: "4%", marginBottom: "15px" }}
          label="Credits"
          variant="outlined"
          name="credits"
          onChange={formik.handleChange}
          error={formik.touched.credits && Boolean(formik.errors.credits)}
          helperText={formik.touched.credits && formik.errors.credits}
        />

        <FormGroup sx={{ marginBottom: "15px" }}>
          <FormControlLabel
            name="enable"
            checked={formik.values.status}
            control={<Checkbox color="secondary" />}
            label="Enable"
            onChange={formik.handleChange}
          />
        </FormGroup>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
        >
          Add Program
        </Button>
      </Box>
      <BackdropModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        title={"Add!"}
      >
        The Program has been Added.
      </BackdropModal>
    </>
  );
}
