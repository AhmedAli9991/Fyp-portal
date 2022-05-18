import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import DataTable from "../UI/TableUI";
import axios from "axios";

import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import BackdropModal from "../UI/BackdropModal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ViewFaculty() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [gettoken, settoken] = useState("");
  const [facultylist, setfacultylist] = useState([]);
  const [open, setOpen] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [father_HusbandName, setfatherhusband] = useState("");
  const [nationality, setnationality] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [email, setemail] = useState("");
  const [department, setdept] = useState("");
  const [campus, setcampus] = useState("");
  const [designation, setdesign] = useState("");
  const [enable, setenable] = useState("");
  const [isActive, setactive] = useState("");

  const [selectedobj, setselectedobj] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    var { token } = user;
    console.log(token);
    settoken(token);

    axios
      .get(`${process.env.REACT_APP_URL}/admin/faculty`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("testing new get data");
        console.log(response.data.facultylist);
        var newarr = response.data.facultylist.map((obj) => ({
          ...obj,
          id: obj._id,
        }));
        console.log(newarr);
        setfacultylist(newarr);
      })
      .catch((err) => console.log(err));
  }, []);

  function getData() {
    const user = JSON.parse(localStorage.getItem("user"));

    var { token } = user;
    console.log(token);
    settoken(token);

    axios
      .get(`${process.env.REACT_APP_URL}/admin/faculty`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("testing another get data");
        console.log(response.data.facultylist);
        var newarr = response.data.facultylist.map((obj) => ({
          ...obj,
          id: obj._id,
        }));
        console.log(newarr);
        setfacultylist(newarr);
      })
      .catch((err) => console.log(err));
  }

  const updateProgram = () => {
    var obj = {};
    if (firstName !== "") {
      obj.firstName = firstName;
      setfirstName("");
    }

    if (lastName !== "") {
      obj.lastName = lastName;
      setlastName("");
    }

    if (father_HusbandName !== "") {
      obj.father_HusbandName = father_HusbandName;
      setfatherhusband("");
    }
    if (nationality !== "") {
      obj.nationality = nationality;
      setnationality("");
    }
    if (country !== "") {
      obj.country = country;
      setcountry("");
    }

    if (city !== "") {
      obj.city = city;
      setcity("");
    }
    if (email !== "") {
      obj.email = email;
      setemail("");
    }
    if (department !== "") {
      obj.department = department;
      setdept("");
    }
    if (campus !== "") {
      obj.campus = campus;
      setcampus("");
    }
    if (isActive !== "") {
      if (isActive == "active") {
        obj.isActive = true;
        setactive("");
      } else {
        obj.isActive = false;
        setactive("");
      }
    }

    if (designation !== "") {
      obj.designation = designation;
      setdesign("");
    }

    if (enable !== "") {
      if (enable == "enable") {
        obj.enable = true;
        setenable("");
      } else {
        obj.enable = false;
        setenable("");
      }
    }

    // if(description!=''){
    //   obj.description=description;
    //   setdescription('');
    // }

    // if(status!=''){
    //   if(status=='enable'){
    //     obj.status=true;
    //     setstatus('');
    //   }else{
    //     obj.status=false;

    //   setstatus('');
    //   }

    // }

    console.log(obj);

    axios
      .patch(
        `${process.env.REACT_APP_URL}/admin/faculty/` + selectedobj._id,
        obj,
        {
          headers: {
            Authorization: `Bearer ${gettoken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.msg);

        getData();
        if (response.status === 200) {
          setShowUpdateModal(true);
        }
        // alert("Faculty Updated");
      })
      .catch((err) => console.log(err));
  };

  const facultyHeader = [
    {
      field: "fullName",
      headerName: "Name",
      width: 200,
    },
    { field: "designation", headerName: "Designation", width: 150 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "department", headerName: "Department", width: 300 },
    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (props) => (
        <>
          <Button
            onClick={() => {
              axios
                .delete(
                  `${process.env.REACT_APP_URL}/admin/faculty/` + props.row.id,
                  {
                    headers: {
                      Authorization: `Bearer ${gettoken}`,
                    },
                  }
                )
                .then((response) => {
                  console.log(response.data.msg);

                  getData();
                  if (response.status === 200) {
                    setShowDeleteModal(true);
                  }
                  // alert("Faculty deleted");
                })
                .catch((err) => console.log(err));
            }}
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 0 }}
          >
            Delete
          </Button>

          <Button
            onClick={() => {
              setselectedobj(props.row);
              handleOpen();
            }}
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 10 }}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="First Name"
            variant="standard"
            color="secondary"
            focused
            style={{ width: "100%" }}
            placeholder={selectedobj.firstName}
            value={firstName}
            onChange={(event) => {
              setfirstName(event.target.value);
            }}
          />

          <TextField
            label="Last Name"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.lastName}
            value={lastName}
            onChange={(event) => {
              setlastName(event.target.value);
            }}
          />

          <TextField
            label="Father/Husband"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.father_HusbandName}
            value={father_HusbandName}
            onChange={(event) => {
              setfatherhusband(event.target.value);
            }}
          />

          <TextField
            label="Nationality"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.nationality}
            value={nationality}
            onChange={(event) => {
              setnationality(event.target.value);
            }}
          />

          <TextField
            label="Country"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.country}
            value={country}
            onChange={(event) => {
              setcountry(event.target.value);
            }}
          />

          <TextField
            label="City"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.city}
            value={city}
            onChange={(event) => {
              setcity(event.target.value);
            }}
          />

          <TextField
            label="Email"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.email}
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />

          <TextField
            label="Department"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.department}
            value={department}
            onChange={(event) => {
              setdept(event.target.value);
            }}
          />

          <TextField
            label="Campus"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.campus}
            value={campus}
            onChange={(event) => {
              setcampus(event.target.value);
            }}
          />

          <TextField
            label="Designation"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.designation}
            value={designation}
            onChange={(event) => {
              setdesign(event.target.value);
            }}
          />
          <Box>
            <FormControl variant="standard" sx={{ width: 220, mt: 1.5 }}>
              <InputLabel color="secondary" id="cars">
                Enable Program?:
              </InputLabel>
              <Select
                variant="standard"
                name="cars"
                labelId="cars"
                id="cars"
                color="secondary"
                /* value={age} */
                onChange={(event) => {
                  setactive(event.target.value);
                }}
              >
                <MenuItem value="enable">enable</MenuItem>
                <MenuItem value="disable">disable</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ width: 220, mt: 1.5 }}>
              <InputLabel color="secondary" id="cars">
                Enable faculty?:
              </InputLabel>
              <Select
                variant="standard"
                name="cars"
                labelId="cars"
                id="cars"
                color="secondary"
                /* value={age} */
                onChange={(event) => {
                  setenable(event.target.value);
                }}
              >
                <MenuItem value="enable">enable</MenuItem>
                <MenuItem value="disable">disable</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 1 }}
            onClick={(event) => {
              updateProgram();
            }}
          >
            Update
          </Button>
        </Box>
      </Modal>

      <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
        <DataTable header={facultyHeader} data={facultylist} />
      </div>
      <BackdropModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        title={"Delete!"}
      >
        Faculty has been Deleted.
      </BackdropModal>
      <BackdropModal
        showModal={showUpdateModal}
        setShowModal={setShowUpdateModal}
        title={"Update!"}
      >
        Faculty has been Updated.
      </BackdropModal>
    </div>
  );
}
