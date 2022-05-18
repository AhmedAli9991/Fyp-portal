import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default function SendNotification() {
  const[notification,setnotification] = useState("")
  const[selected , setselected] = useState("")
  console.log(selected)
  const handleSubmit = async(event) => {
    event.preventDefault();
    let token = getToken();
    alert("Submitted");
    await axios.post(`http://localhost:3000/Notification/send-to-/${selected._id}`,{ 
      notification
    },
    {headers: {
      Authorization: `Bearer ${token}`,
    }})
       
  };
  useEffect(() => {
    getData();
  }, []);
  const [Students,setStudent]=useState([])
  const getData = async () => {
    let token = getToken();
    const res = await axios.get("http://localhost:3000/Notification/studentPHD",
    {headers: {
      Authorization: `Bearer ${token}`,
    }});
    const data = await res.data;
    setStudent([...data]);
  };

  const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      var { token } = user;
      console.log(token);
      return token;
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">
            Registration No.
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Registration No"
            onChange={(e)=>setselected(e.target.value)}
          >{Students.map((student)=>{
            return(
            <MenuItem value={student}>{student.student_id.registrationNo}</MenuItem>
            )}
          )}
          </Select>
        </FormControl>
      </Box>

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Student Name"
        color="secondary"
        variant="outlined"
        value = {selected.username}      

      />

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Notification"
        color="secondary"
        variant="outlined"
        value = {notification}
        onChange = {(e)=>setnotification(e.target.value)}
      />

      <Button type="submit" variant="contained" size="large" color="secondary">
        Send Notification
      </Button>
    </Box>
  );
}
