import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import studentService from "../../API/students";
import synopsisService from "../../API/synopsis";
import programsService from "../../API/programs";

export default function UpdateThesisStatus() {
  const [submittedSynopsis, setSubmittedSynopsis] = useState([]);
  const [programs, setPrograms] = useState([]);

  const [data, setData] = React.useState({
    thesisStatus: "",
    student_id: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    async function fetchData() {
      const submittedSynopsis = await synopsisService.getSubmittedSynopsis();

      setSubmittedSynopsis(submittedSynopsis);
    }

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    synopsisService.updateSynopsisStatus(data);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
        }}
      >
        <h1>Thesis Status</h1>
      </div>
      {/* Form starts here */}
      <Box component="form" noValidate sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Update Thesis Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="thesisStatus"
                value={data.session_id}
                label="Update Thesis Status"
                onChange={handleChange}
              >
                <MenuItem value={"synopsisEvaluation"}>
                  Synopsis Evaluation
                </MenuItem>
                <MenuItem value={"internalEvaluation"}>
                  Internal Evaluation
                </MenuItem>
                <MenuItem value={"externalEvaluation"}>
                  External Evaluation
                </MenuItem>
                <MenuItem value={"passOut"}>Pass Out</MenuItem>
                <MenuItem value={"dismissed"}>Dismissed</MenuItem>
                <MenuItem value={"synopsisNotSubmittedForGac"}>
                  Synopsis Not Submitted for GAC
                </MenuItem>
                <MenuItem value={"unscheduled"}>Unscheduled</MenuItem>
                <MenuItem value={"scheduled"}>Scheduled</MenuItem>
                <MenuItem value={"conducted"}>Conducted</MenuItem>
                <MenuItem value={"approvedByGac"}>Approved By GAC</MenuItem>
                <MenuItem value={"minorChanges"}>Minor Changes</MenuItem>
                <MenuItem value={"synopsisNotSubmittedForDeanOffice"}>
                  Synopsis Not Submitted for DEAN office
                </MenuItem>
                <MenuItem value={"synopsisSubmittedForDeanOffice"}>
                  Synopsis Submitted for DEAN office
                </MenuItem>
                <MenuItem value={"forwardedToDeanOffice "}>
                  Forwarded to DEAN Office
                </MenuItem>
                <MenuItem value={"changesSuggestedByDeanOffice"}>
                  Changes suggested by DEAN office
                </MenuItem>
                <MenuItem value={"Approved By DEAN"}>Approved By DEAN</MenuItem>
                <MenuItem value={"thesisNotSubmittedForInternal"}>
                  Thesis Not Submitted for Internal
                </MenuItem>
                <MenuItem value={"thesisSubmittedForInternal"}>
                  Thesis Submitted for Internal
                </MenuItem>
                <MenuItem value={"acceptedByInternal"}>
                  Accepted by Internal
                </MenuItem>
                <MenuItem value={"thesisNotSubmittedForInternal"}>
                  Thesis not Submitted for Internal
                </MenuItem>
                <MenuItem value={"thesisSubmittedfForInternal"}>
                  Thesis Submitted for Internal
                </MenuItem>
                <MenuItem value={"deffered"}>Deffered</MenuItem>
                <MenuItem value={"accepted"}>Accepted</MenuItem>
                <MenuItem value={"majorChanges"}>Major Changes</MenuItem>
                <MenuItem value={"rejected"}>Rejected</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Registration No.
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.student_id}
                label="Registration No."
                name="student_id"
                onChange={handleChange}
              >
                {submittedSynopsis.map((oneSynopsis) => (
                  <MenuItem
                    selected="selected"
                    value={oneSynopsis.student_id._id}
                  >
                    {oneSynopsis.student_id.registrationNo}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Pinitial-body start */}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          style={{ marginTop: "2%", width: "20%" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
