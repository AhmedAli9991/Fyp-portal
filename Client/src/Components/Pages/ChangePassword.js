import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import progressReportService from "../../API/progressReports";
import authService from "../../API/auth";
import BackdropModal from "../UI/BackdropModal";

export default function ChangePassword() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const validationSchema = yup.object({
    oldPassword: yup.string().required(),
    newPassword: yup.string().required(),
    confirmPassword: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setShowError(false);
      if (
        values.newPassword.trim().length !== 0 &&
        values.confirmPassword.trim().length !== 0
      ) {
        if (values.newPassword === values.confirmPassword) {
          const res = await authService.changePassword({
            oldPassword: values.oldPassword,
            confirmPassword: values.confirmPassword,
          });
          console.log(res);
          if (res.status === 200) {
            setShowAddModal(true);
          }
        } else {
          setShowError(true);
        }
      } else {
        setShowError(true);
      }
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
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Old Password"
        color="secondary"
        variant="outlined"
        name="oldPassword"
        value={formik.values.oldPassword}
        onChange={formik.handleChange}
        error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
        helperText={formik.touched.oldPassword && formik.errors.oldPassword}
      />

      <TextField
        sx={{ width: "100%", marginBottom: "15px" }}
        label="New Password"
        color="secondary"
        variant="outlined"
        name="newPassword"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
      />

      <TextField
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Confirm Password"
        color="secondary"
        variant="outlined"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />

      {showError && <div style={{ color: "red" }}>Passwords donot match</div>}

      <Button type="submit" variant="contained" size="large" color="secondary">
        Update Password
      </Button>
      <BackdropModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        title={"Updated!"}
      >
        Password has been updated.
      </BackdropModal>
    </Box>
  );
}
