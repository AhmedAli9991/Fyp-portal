import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TextField } from "@mui/material";

import DataTable from "../UI/TableUI";
import axios from "axios";
import { Button } from "@mui/material";
import BackdropModal from "../UI/BackdropModal";
const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ManageSession() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [sessionlist, setsessionlist] = useState([]);
  const [gettoken, settoken] = useState("");
  const [selectedobj, setselectedobj] = useState({});
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    var { token } = user;
    console.log(token);
    settoken(token);

    axios
      .get(`${process.env.REACT_APP_URL}/sessions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("testing new get data");
        console.log(response.data);
        var newarr = response.data.map((obj) => ({
          ...obj,
          id: obj._id,
        }));
        console.log(newarr);
        setsessionlist(newarr);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateProgram = () => {
    var obj = {};
    if (title !== "") {
      obj.title = title;
      settitle("");
    }

    if (description !== "") {
      obj.description = description;
      setdescription("");
    }

    if (status !== "") {
      if (status === "enable") {
        obj.status = true;
        setstatus("");
      } else {
        obj.status = false;
        setstatus("");
      }
    }

    console.log(obj);

    axios
      .patch(
        `${process.env.REACT_APP_URL}/sessions/updatesession/` +
          selectedobj._id,
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
        // alert("Session Updated");
      })
      .catch((err) => console.log(err));
  };

  function getData() {
    const user = JSON.parse(localStorage.getItem("user"));

    var { token } = user;
    console.log(token);
    settoken(token);

    axios
      .get(`${process.env.REACT_APP_URL}/sessions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("testing another get data");
        console.log(response.data);
        var newarr = response.data.map((obj) => ({
          ...obj,
          id: obj._id,
        }));
        console.log(newarr);
        setsessionlist(newarr);
      })
      .catch((err) => console.log(err));
  }

  const sessionHeader = [
    {
      field: "title",
      headerName: "Ttile",
      width: 300,
    },
    { field: "description", headerName: "Description", width: 300 },
    { field: "status", headerName: "Status", width: 300 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,

      renderCell: (props) => (
        <>
          <Button
            onClick={() => {
              axios
                .delete(
                  `${process.env.REACT_APP_URL}/sessions/deletesession/` +
                    props.row.id,
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
                  // alert("session deleted");
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
            label="Title"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.title}
            value={title}
            onChange={(event) => {
              settitle(event.target.value);
            }}
          />
          <TextField
            label="Description"
            variant="standard"
            color="secondary"
            focused
            sx={{ mt: 1, mb: 1 }}
            style={{ width: "100%" }}
            placeholder={selectedobj.description}
            value={description}
            onChange={(event) => {
              setdescription(event.target.value);
            }}
          />

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
                setstatus(event.target.value);
              }}
              label="Enable Program?:"
            >
              <MenuItem value="enable">enable</MenuItem>
              <MenuItem value="disable">disable</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button
            color="secondary"
            variant="contained"
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
        <DataTable header={sessionHeader} data={sessionlist} />
      </div>
      <BackdropModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        title={"Delete!"}
      >
        The Session has been Deleted.
      </BackdropModal>
      <BackdropModal
        showModal={showUpdateModal}
        setShowModal={setShowUpdateModal}
        title={"Update!"}
      >
        The Session has been Updated.
      </BackdropModal>
    </div>
  );
}
