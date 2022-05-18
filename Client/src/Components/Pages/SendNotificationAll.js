import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";
import axios from "axios";

export default function SendNotificationAll() {
  const[notification,setnotification] = useState("")
  const handleSubmit = async(event) => {
    event.preventDefault();
    let token = getToken();
    alert("Submitted");
    await axios.post("http://localhost:3000/Notification/send-All",{ 
      notification
    },
    {headers: {
      Authorization: `Bearer ${token}`,
    }})
       
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
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Notification"
        color="secondary"
        variant="outlined"
        value={notification}
        onChange={(e)=>setnotification(e.target.value)}
      />
      <Button type="submit" variant="contained" size="large" color="secondary">
        Send Notification
      </Button>
    </Box>
  );
}
