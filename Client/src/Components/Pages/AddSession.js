import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, Box } from "@mui/material";
import sessionsService from "../../API/sessions";
import BackdropModal from "../UI/BackdropModal";
import * as yup from "yup";
import { useFormik } from "formik";
export default function AddSession() {
  const [showAddModal, setShowAddModal] = useState(false);

  const validationSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    status: yup.boolean().required(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      status: false,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await sessionsService.addSession(values);

      if (res.status === 200) {
        setShowAddModal(true);
      }

      console.log("response", res);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        id="title"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Session Title"
        name="title"
        color="secondary"
        variant="outlined"
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />

      <TextField
        id="desc"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Description"
        name="description"
        color="secondary"
        variant="outlined"
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />

      <FormGroup sx={{ marginBottom: "15px" }}>
        <FormControlLabel
          name="status"
          checked={formik.values.status}
          control={<Checkbox color="secondary" />}
          label="Status"
          onChange={formik.handleChange}
        />
      </FormGroup>

      <Button type="submit" variant="contained" size="large" color="secondary">
        Add Session
      </Button>
      <BackdropModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        title={"Add!"}
      >
        The Session has been Added.
      </BackdropModal>
    </Box>
  );
}
