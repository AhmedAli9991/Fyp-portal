import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function SendNotificationMS() {
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
    const res = await axios.get("http://localhost:3000/Notification/studentMS",
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
      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="demo-simple-select-label">Registration No</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Registration No"
            value={selected}
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
        color="secondary"
        label="Student Name"
        variant="outlined"
        sx={{ width: "100%", marginBottom: "15px" }}
        value = {selected.username}      
      />

      <TextField
        color="secondary"
        fullWidth
        sx={{ marginBottom: "15px" }}
        id="outlined-multiline-flexible"
        label="Notification"
        multiline
        maxRows={8}
        value = {notification}
        onChange = {(e)=>setnotification(e.target.value)}
      
      />

      <Button type="submit" variant="contained" color="secondary" size="large">
        Send Notification
      </Button>
    </Box>
  );
}
