import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { useFormik } from "formik";
import * as yup from "yup";

export default function DialogSelect(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const validationSchema = yup.object({
    year: yup
      .string()
      .matches(/^[2][2-9]$/, "The year should be between 22-29")
      .required("Year is required"),
    rollNo: yup
      .string()
      .matches(/^[0-9][0-9][0-9]$/, "Roll Number cannot exceed three digits")
      .required("Roll No. is required"),
  });

  const formik = useFormik({
    initialValues: {
      session: "",
      year: "",
      discipline: "",
      rollNo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, reason) => {
      props.onRegNum(values);
      if (reason !== "backdropClick") {
        setOpen(false);
      }
      // console.log(values);
    },
  });

  return (
    <div>
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        Enter Registration Number Here
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Enter registration Number</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Session</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="session"
                name="session"
                variant="standard"
                defaultValue=""
                label="session"
                value={formik.values.session}
                onChange={formik.handleChange}
              >
                {/* <MenuItem value="">
                  <em>-</em>
                </MenuItem> */}
                <MenuItem value={"SP"}>SP</MenuItem>
                <MenuItem value={"FA"}>FA</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                type="text"
                sx={{ m: 1, maxWidth: 120 }}
                autoComplete="given-name"
                variant="standard"
                placeholder="00"
                id="year"
                name="year"
                label="Year"
                value={formik.values.year}
                onChange={formik.handleChange}
                error={formik.touched.year && Boolean(formik.errors.year)}
                helperText={formik.touched.year && formik.errors.year}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: 120 }}>
              <InputLabel id="demo-simple-select-label">Discipline</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="discipline"
                name="discipline"
                variant="standard"
                label="Discipline"
                value={formik.values.discipline}
                onChange={formik.handleChange}
              >
                <MenuItem value={"PCS"}>PCS</MenuItem>
                <MenuItem value={"RCS"}>RCS</MenuItem>
                <MenuItem value={"RSE"}>RSE</MenuItem>
                <MenuItem value={"RIS"}>RIS</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                sx={{ m: 1, width: 120 }}
                autoComplete="given-name"
                type="text"
                variant="standard"
                placeholder="000"
                id="rollNo"
                label="Roll No."
                name="rollNo"
                value={formik.values.rollNo}
                onChange={formik.handleChange}
                error={formik.touched.rollNo && Boolean(formik.errors.rollNo)}
                helperText={formik.touched.rollNo && formik.errors.rollNo}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={formik.handleSubmit}>Ok</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
