import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import studentService from "../../API/students";
import profile from "../../../src/avatar-1.jpg";
import synopsisService from "../../API/synopsis";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";

export default function SuperivorReport() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const [selectedSynopsis, setSelectedSynopsis] = useState([]);
  const [submittedSynopsis, setSubmittedSynopsis] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const alreadysubmittedSynopsis =
        await synopsisService.getSubmittedSynopsis();

      setSubmittedSynopsis(alreadysubmittedSynopsis);

      setLoading(true);
    }
    fetchData();
  }, []);

  const handleRegistrationNo = (e) => {
    setSelectedSynopsis([]);
    let array = submittedSynopsis.filter(
      (oneSynopsis) => e.target.value === oneSynopsis.thesisStatus
    );
    setSelectedSynopsis(array);
    if (array.length !== 0) {
      setIsSelected(true);
    }
  };

  return (
    <>
      <Box sx={{ minWidth: 120, mb: 6 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Update Thesis Status
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedSynopsis.thesisStatus || ""}
            name="thesisStatus"
            label="Select Status"
            onChange={handleRegistrationNo}
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
      </Box>

      {selectedSynopsis.map((synopsis) => {
        return (
          <>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 1rem",
              }}
            >
              <div>
                <img
                  src={
                    process.env.REACT_APP_URL +
                      "/" +
                      synopsis?.student_id?.profilePicture || profile
                  }
                  alt="Student Profile"
                  style={{
                    height: "80px",
                    width: "80px",
                    borderRadius: "100%",
                    marginBottom: "1rem",
                  }}
                />
                {console.log(
                  process.env.REACT_APP_URL +
                    "/" +
                    synopsis?.student_id?.profilePicture
                )}
                <div
                  style={{
                    margin: "0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "20rem",
                      margin: "0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h3 style={{ margin: "0 1rem 0 0" }}>Name:</h3>
                    <p style={{ margin: "0" }}>
                      {synopsis?.student_id?.username}
                    </p>
                  </div>
                  <h3
                    style={{
                      marginRight: "1rem",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                  >
                    Registration Number:
                  </h3>
                  <p style={{ marginTop: "0", marginBottom: "0" }}>
                    {synopsis?.student_id?.registrationNo}
                  </p>
                </div>
                <div
                  style={{
                    margin: "1rem 0 0 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "20rem",
                      margin: "0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h3 style={{ margin: "0 1rem 0 0" }}>Father Name:</h3>
                    <p style={{ margin: "0" }}>
                      {synopsis?.student_id?.fatherName}
                    </p>
                  </div>
                  <h3
                    style={{
                      marginRight: "1rem",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                  >
                    Supervisor:
                  </h3>
                  <p style={{ marginTop: "0", marginBottom: "0" }}>
                    {synopsis?.supervisor_id?.fullName}
                  </p>
                </div>
              </div>
            </Box>
            <table
              cellSpacing={0}
              cellPadding={4}
              style={{
                color: "#333333",
                borderCollapse: "separate",
                margin: "1rem",
              }}
            >
              <tbody>
                <tr
                  style={{
                    color: "#333333",
                  }}
                >
                  <td
                    valign="top"
                    style={{
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  ></td>
                </tr>

                <tr
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <td
                    valign="top"
                    style={{
                      backgroundColor: "#E9ECF1",
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  >
                    Email
                  </td>
                  <td>{synopsis?.student_id?.email}</td>
                </tr>
                <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
                  <td
                    valign="top"
                    style={{
                      backgroundColor: "#E9ECF1",
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  >
                    Mobile No.
                  </td>
                  <td>{synopsis?.student_id?.mobile}</td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <td
                    valign="top"
                    style={{
                      backgroundColor: "#E9ECF1",
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  >
                    Track
                  </td>
                  <td>{synopsis?.student_id?.thesisTrack}</td>
                </tr>

                <tr
                  style={{
                    color: "#333333",
                    backgroundColor: "#F7F6F3",
                  }}
                >
                  <td
                    valign="top"
                    style={{
                      backgroundColor: "#E9ECF1",
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  >
                    Thesis Title
                  </td>
                  <td>{synopsis?.synopsisTitle}</td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <td
                    valign="top"
                    style={{
                      backgroundColor: "#E9ECF1",
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  >
                    Registration Date
                  </td>
                  <td>{synopsis?.student_id?.thesisRegistration}</td>
                </tr>
                {/* <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "20%",
                }}
              >
                External
              </td>
              <td> {selectedSchedule?.student_id?.synopsisTitle} </td>
            </tr> */}
                <tr
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <td
                    valign="top"
                    style={{
                      backgroundColor: "#E9ECF1",
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  >
                    Thesis Status
                  </td>

                  <td>{synopsis?.thesisStatus}</td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                width: "10%",
                minWidth: "6rem",
                maxWidth: "10rem",
                margin: "2rem auto",
                borderTop: "8px dotted #572E74",
              }}
            />
          </>
        );
      })}
    </>
  );
}
