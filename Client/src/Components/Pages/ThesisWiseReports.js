import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import { thesisWiseData, thesisWiseHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function ThesisWiseReports() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    /* axios.post("${process.env.REACT_APP_URL}auth/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        const data = res.data.user;
	console.log(data);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      }); */
  };
  return (
    <>
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Thesis Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            label="Thesis Status"
            //onChange={handleChange}
          >
            <MenuItem selected="selected" value="5">
              -
            </MenuItem>
            <MenuItem value="1">N/A</MenuItem>
            <MenuItem value="2">Accepted</MenuItem>
            <MenuItem value="3">Not Accepted</MenuItem>
            <MenuItem value="4">Review</MenuItem>
            <MenuItem value="5">Not Accepted</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="col-md-2 col-sm-4">Students :</div>

      <DataTable header={thesisWiseHeader} data={thesisWiseData} />
    </>
  );
}
