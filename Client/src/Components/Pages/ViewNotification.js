import { Button } from "@mui/material";
import axios from "axios";
import React,{useState,useEffect} from "react";
import {
  viewNotificationData,
  
} from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";
import { DataGrid } from "@mui/x-data-grid";
export default function ViewNotification() {
  const [Data,setData]=useState([])
  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    let token = getToken();
    const res = await axios.get("http://localhost:3000/Notification/getNotification",
    {headers: {
      Authorization: `Bearer ${token}`,
    }});
    const data = await res.data;
    setData(data);
  };console.log(Data)

  const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      var { token } = user;
      console.log(token);
      return token;
    }
  };

  const viewNotificationHeader = [
    
    {
      field: "notification",
      headerName: "Notification",
      width: 400,
    },
    
    { field: "creationDate", headerName: "Date", width: 400 },
    
    {    
      field: "Action",
      headerName: "Action",
      width: 150,

      renderCell: (props) => (
        <Button
          onClick={async() => {
            let token = getToken();
            await axios.delete(`http://localhost:3000/Notification/Markasread/${props.row._id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              getData()
             
          }} 
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 0 }}
        >
          Mark As Read
        </Button>
      ),
    },
  ];
 

  return (
    <>
  <DataGrid
          style={{ height: 400, width: "100%" }}
          columns={viewNotificationHeader}
          getRowId={(Data)=>Data._id}
          rows={Data}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />    </>
  );
}
