import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import studentService from "../../API/students";
import synopsisService from "../../API/synopsis";
import programsService from "../../API/programs";

export default function ManagePhdDeadline() {
  const [students, setStudents] = useState([]);
  const [programs, setPrograms] = useState([]);

  const [data, setData] = React.useState({
    student_id: "",
    // session_id: "",
    program_id: "",
    defenseDate: new Date(),
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleChangeDate = (newValue) => {
    setData({ ...data, date: newValue });
  };
  useEffect(() => {
    async function fetchData() {
      const stds = await studentService.getStudents();
      const prog = await programsService.getPrograms();
      setStudents(stds);
      setPrograms(prog);
    }

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    synopsisService.createSchedule(data);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
        }}
      >
        <h1>Submission Deadline</h1>
      </div>
      {/* Form starts here */}
      <Box component="form" noValidate sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Current Deadline"
                // value={"04/16/2022 12:04 pm"}
                disabled
                defaultValue={"04/16/2022 12:04 pm"}
                color="secondary"
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} style={{ width: "100%" }}>
            <FormControl sx={{ mb: 1 }}>
              <FormLabel color="secondary">Type</FormLabel>
              <RadioGroup
                row
                name="studentType"
                /* value={formik.values.studentType}
                onChange={formik.handleChange} */
              >
                <FormControlLabel
                  value="synopsis"
                  control={<Radio color="secondary" />}
                  label="Synopsis"
                />
                <FormControlLabel
                  value="Thesis"
                  control={<Radio color="secondary" />}
                  label="thesis"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel color="secondary" id="demo-simple-select-label">
                Program
              </InputLabel>
              <Select
                color="secondary"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="program_id"
                value={data.program_id}
                label="Program"
                onChange={handleChange}
              >
                {programs.map((program) => (
                  <MenuItem selected="selected" value={program._id}>
                    {program.programShortName}
                  </MenuItem>
                ))}
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              color="secondary"
            >
              <DateTimePicker
                color="secondary"
                name="defenseDate"
                label="New Submission Deadine"
                value={data.defenseDate}
                onChange={handleChangeDate}
                renderInput={(params) => (
                  <TextField {...params} color="secondary" />
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>

      {/* Pinitial-body start */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ mt: 4, mb: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
