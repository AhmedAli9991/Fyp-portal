import React, { useState, useEffect } from "react";

import studentService from "../../API/students";
import DataTable from "../UI/TableUI";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { red } from "@mui/material/colors";
import adminService from "../../API/admin";
import BackdropModal from "../UI/BackdropModal";

export default function AddSupervisoryCommittee() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState(null);

  const [selectedStudentId, setSelectedStudentId] = useState([]);
  const [supervisorsList, setSupervisorsList] = useState([]);
  const [selectedSupervisor, setSelectedSupervisor] = useState({});
  const [supervisors, setSupervisors] = useState([]);
  const [superviseData, setSuperviseData] = useState([]);
  const [error, setError] = useState(false);
  const [isIncomplete, setIsIncomplete] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const studs = await studentService.getStudents();
      setStudents(studs);
      // setLoading(true);
    }
    fetchData();
  }, []);

  const superviseHeader = [
    {
      field: "facultyMember",
      headerName: "Faculty Member",
      width: 300,
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 300,
    },
    {
      field: "actions",
      headerName: "Action",
      width: 300,
      renderCell: (props) => (
        <Button
          onClick={() => {
            var data = superviseData.filter((obj) => obj.id !== props.row.id);
            var list = supervisorsList.filter((id) => id !== props.row.id);

            setSupervisorsList(list);
            console.log(supervisorsList);
            setSuperviseData(data);
          }}
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 0 }}
        >
          Delete
        </Button>
      ),
    },
  ];
  const getSupervisors = async () => {
    let data = await studentService.getSupervisors();

    console.table("SubmissionM", data?.supervisors);
    setSupervisors(data?.supervisors);
  };
  useEffect(() => {
    getSupervisors();
  }, []);

  const updateList = () => {
    console.log(error, supervisorsList.length);
    if (supervisorsList.length > 2) {
      setError(true);
    } else {
      setError(false);
      setSupervisorsList([...supervisorsList, selectedSupervisor._id]);
      setSuperviseData([
        ...superviseData,
        {
          id: selectedSupervisor._id,
          facultyMember: selectedSupervisor.username,
          designation: "supervisor",
        },
      ]);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // alert("Selected Supervisors" + supervisorsList);
    console.log(supervisorsList);
    setIsIncomplete(false);
    setError(false);
    if (supervisorsList.length !== 0 && supervisorsList.length === 3) {
      const res = await adminService.addSupervisoryCommittee(
        { committee: supervisorsList },
        selectedStudentId
      );
      setShowAddModal(true);

      if (res.status === 200) {
        setShowAddModal(true);
      }

      console.log("response", res);
    } else {
      setIsIncomplete(true);
    }
  };
  const defaultProps = {
    options: students,
    getOptionLabel: (student) => student.registrationNo || "",
  };

  return (
    <>
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <Box sx={{ mb: 4 }}>
          <Autocomplete
            {...defaultProps}
            value={autocompleteValue}
            onChange={(value, newValue) => {
              let studentId = newValue?._id;
              // console.log(studentId);
              setAutocompleteValue(newValue);
              setSelectedStudentId(studentId);
              // handleRegistrationNo(registrationNo);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Student"
                variant="outlined"
                color="secondary"
              />
            )}
          />
        </Box>
      </Box>
      <Box
        component="form"
        encType="multipart/form-data"
        onSubmit={submitHandler}
        noValidate
        sx={{ minWidth: 120, marginBottom: "15px" }}
      >
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="supervisor"
            /* value={selectedSupervisor} */

            onChange={(e) => {
              setSelectedSupervisor(e.target.value);
              setError(false);
              setIsIncomplete(false);
            }}
            label="Supervisor"
          >
            {supervisors.map((item) => {
              return (
                <MenuItem key={item._id} value={item}>
                  {item.username}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Box sx={{ marginTop: "16px", display: "grid", placeItems: "center" }}>
          <Button
            onClick={() => {
              updateList();
              setIsIncomplete(false);
            }}
            variant="contained"
            color="secondary"
          >
            Add Supervisor
          </Button>
          <p style={{ marginBottom: "0px", color: red[400] }}>
            {error && "Maximun of 3 supervisors can be added"}
            {isIncomplete && "Committee must have exactly 3 members"}
          </p>
        </Box>
        <DataTable header={superviseHeader} data={superviseData} />
        <Box
          component={"div"}
          sx={{ marginTop: "24px", display: "grid", placeItems: "center" }}
        >
          <Button type="submit" variant="contained" color="secondary">
            Submit Supervisory Committee
          </Button>
        </Box>
      </Box>

      <BackdropModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        title={"Submit!"}
      >
        Supervisory Committee submitted.
      </BackdropModal>
    </>
  );
}
