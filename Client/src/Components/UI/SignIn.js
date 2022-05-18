import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
/* import Link from "@mui/material/Link"; */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../../Store/authSlice";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormControl } from "@mui/material";

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string("Enter your email"),
    /* .email("Enter a valid email")
      .required("Email is required"), */
    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);

      dispatch(
        Login({ userEmail: values.email, userPassword: values.password })
      )
        // .unwrap()
        .then((res) => {
          console.log(res);
          navigate("/Dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "250px",
              margin: "0 0 20px 180px",
            }}
            alt="Remy Sharp"
            src="../assets/images/cui.png"
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box onSubmit={formik.handleSubmit} component="form" sx={{ mt: 1 }}>
            <FormControl>
              <TextField
                margin="normal"
                /* autoComplete="email"
              autoFocus
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email" */
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                /*required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password" */
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid sx={{ ml: 2 }} item>
                  <Link to="/SignUp">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
