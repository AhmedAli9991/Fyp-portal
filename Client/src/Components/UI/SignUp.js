import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DialogueSelect from "./RegiNumberDialog";
import { Signup } from "../../Store/authSlice";
import programsService from "../../API/programs";

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [email, setEmail] = React.useState("");
  const [regNumber, setRegNumber] = React.useState({
    session: "--",
    year: "--",
    discipline: "--",
    rollNo: "--",
  });

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const regNo = `${regNumber.session}${regNumber.year}-${regNumber.discipline}-${regNumber.rollNo}`;
  const mail = `${regNo}@student.comsats.edu.pk`;
  const isbMail = `${regNo}@isbstudent.comsats.edu.pk`;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      Signup({
        registrationNo: regNo,
        username: data.get("Name"),
        fatherName: data.get("Father'sName"),
        mobile: data.get("Mobile"),
        email: email,
        program_id: data.get("Program"),
        userRole: "STUDENT",
        password: "dummy",
      })
    )
      // .unwrap()
      .then((res) => {
        console.log(res);

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    async function fetchData() {
      var prog = await programsService.getPrograms();
      setPrograms(prog);
      console.log(programs);
      // setLoading(true);
    }
    fetchData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img
            style={{
              width: "250px",
              margin: "0 0 20px 180px",
            }}
            alt="Remy Sharp"
            src="../assets/images/cui.png"
          />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item sx={{ mb: [1] }} md={12} xs={12}>
                <DialogueSelect
                  onRegNum={setRegNumber}
                  /* onProgram={props.onProgram} */
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Program</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="Program"
                    name="Program"
                    label="Program"
                  >
                    {programs?.map((program) => (
                      <MenuItem value={program._id}>
                        {program.programShortName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="Name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Father'sName"
                  label="Father's Name"
                  name="Father'sName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid Grid item md={12} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Email</InputLabel>
                  <Select
                    /* disabled */
                    labelId="demo-simple-select-label"
                    id="Email"
                    name="Email"
                    /*  defaultValue={mail} */
                    value={email}
                    onChange={handleChange}
                    label="Email"
                  >
                    <MenuItem value={mail}>{mail}</MenuItem>
                    <MenuItem value={isbMail}>{isbMail}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Mobile"
                  label="Mobile"
                  id="Mobile"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {console.log(regNumber)}
      </Container>
    </ThemeProvider>
  );
}
