import React, { useEffect, useState } from "react";
import profile from "../../../src/avatar-1.jpg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { Autocomplete, Paper, TextField } from "@mui/material";
import synopsisService from "../../API/synopsis";
import { useSelector } from "react-redux";
import studentService from "../../API/students";
import progressReportService from "../../API/progressReports";

export default function ViewPhDStudentDetails() {
  // const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const [autocompleteValue, setAutocompleteValue] = useState(null);

  const [progressReport, setProgressReport] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const studs = await studentService.getStudents();
      // console.log(studs);
      const phdStuds = studs.filter((stud) =>
        stud?.program_id?.programShortName.toLowerCase().includes("phd")
      );
      setStudents(phdStuds);
      setLoading(true);
    }
    fetchData();
    // console.log(students);
  }, []);

  const handleRegistrationNo = (reg) => {
    students.forEach((oneStudent) => {
      if (
        reg === oneStudent.registrationNo &&
        oneStudent?.program_id?.programShortName.toLowerCase().includes("phd")
      ) {
        setSelectedStudent(oneStudent);
        setSelectedStudentId(oneStudent._id);
        console.log("Selected Schedule", selectedStudent);
        setData({ ...data, student_id: oneStudent._id });
      }
    });
  };

  useEffect(() => {
    async function fetchProgressData(selectedStudentId) {
      if (selectedStudentId) {
        const progressData = await progressReportService.getSingleReport(
          selectedStudentId
        );
        console.log(progressData);
        // setProgressReport(progressData);
        setProgressReport({
          sessionTitle: progressData.data.session_id.title,
          comment: progressData.data.comment,
          status: progressData.data.status,
        });
      }
    }

    fetchProgressData(selectedStudentId);
    // console.log(students);
  }, [selectedStudentId]);

  console.log(progressReport);

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
              let registrationNo = newValue?.registrationNo;

              setAutocompleteValue(newValue);

              handleRegistrationNo(registrationNo);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                variant="outlined"
                color="secondary"
              />
            )}
          />
        </Box>
      </Box>

      <div>
        {selectedStudent.length === 0 ? (
          <div style={{ fontSize: "22px", color: "", textAlign: "center" }}>
            No Student Selected !
          </div>
        ) : (
          <>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <div>
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
                    <h3 style={{ margin: "0 1rem 0 0" }}>Candidate:</h3>
                    <p style={{ margin: "0" }}>{selectedStudent?.username}</p>
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
                    {selectedStudent?.registrationNo}
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
                    <h3 style={{ margin: "0 1rem 0 0" }}>Dated:</h3>
                    <p style={{ margin: "0" }}>{"date"}</p>
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
                    {selectedStudent?.supervisor_id?.fullName}
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
                    <h3 style={{ margin: "0 1rem 0 0" }}>Email:</h3>
                    <p style={{ margin: "0" }}>{selectedStudent?.email}</p>
                  </div>
                  <h3
                    style={{
                      marginRight: "1rem",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                  >
                    Mobile Number:
                  </h3>
                  <p style={{ marginTop: "0", marginBottom: "0" }}>
                    {selectedStudent?.mobile}
                  </p>
                </div>
              </div>
              {/* <div
          style={{
            display: "grid",
            placeContent: "center",
            color: "white",
            fontSize: "20px",
            borderRadius: "50%",
            backgroundColor: "gray",
            height: "6rem",
            width: "6rem",
          }}
        >
          A
        </div>*/}
              <img
                src={
                  process.env.REACT_APP_URL + "/" + selectedStudent.profilePic
                }
                alt=""
                style={{
                  objectFit: "contain",
                  height: "6rem",
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* <Box sx={{ mt: 4 }}>
              <div>
                <h3
                  style={{
                    margin: "1rem 1rem 0",
                    fontSize: "1.1rem",
                  }}
                >
                  Courses Passed:
                </h3>
                <div
                  style={{
                    margin: "0.5rem 1rem 0",
                    display: "flex",
                    alignItems: "center",

                    textAlign: "justify",
                  }}
                >
                  {data.coursesPassed}
                </div>
              </div>
            </Box> */}

            {/* <Box sx={{ mt: 2 }}>
              <div>
                <h3
                  style={{
                    margin: "1rem 1rem 0",
                    fontSize: "1.1rem",
                  }}
                >
                  Supervisory Committee:
                </h3>
                <div
                  style={{
                    margin: "0.5rem 1rem 0",
                    display: "flex",
                    alignItems: "center",

                    textAlign: "justify",
                  }}
                >
                  {selectedStudent?.supervisor_id?.fullName}
                </div>
              </div>
            </Box> */}

            <Box sx={{ mt: 2 }}>
              <div>
                <h3
                  style={{
                    margin: "1rem 1rem 0",
                    fontSize: "1.1rem",
                  }}
                >
                  Progress Reports:
                </h3>
                <div
                  style={{
                    margin: "0.5rem 1rem 0",
                    display: "flex",
                    alignItems: "center",

                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur adipisci ratione ipsum modi autem. Molestias.
                </div>
              </div>
              <div className="">
                <table
                  cellSpacing={0}
                  cellPadding={6}
                  style={{
                    margin: "1rem",
                    color: "#333333",
                    height: "50px",
                  }}
                >
                  <tbody>
                    <tr
                      style={{ color: "#333333", backgroundColor: "#F7F6F3" }}
                    >
                      <td
                        valign="top"
                        style={{
                          backgroundColor: "#E9ECF1",
                          fontWeight: "bold",
                          width: "20%",
                        }}
                      >
                        Session
                      </td>
                      <td>{progressReport?.sessionTitle}</td>
                    </tr>
                    <tr style={{ backgroundColor: "White" }}>
                      <td
                        valign="top"
                        style={{
                          backgroundColor: "#E9ECF1",
                          fontWeight: "bold",
                          width: "20%",
                        }}
                      >
                        Status
                      </td>
                      <td>{progressReport?.status}</td>
                    </tr>
                    <tr
                      style={{ color: "#333333", backgroundColor: "#F7F6F3" }}
                    >
                      <td
                        valign="top"
                        style={{
                          backgroundColor: "#E9ECF1",
                          fontWeight: "bold",
                          width: "20%",
                        }}
                      >
                        Comments
                      </td>
                      <td>{progressReport?.comment}</td>
                    </tr>
                    <tr style={{ backgroundColor: "White" }}>
                      <td
                        valign="top"
                        style={{
                          backgroundColor: "#E9ECF1",
                          fontWeight: "bold",
                          width: "20%",
                        }}
                      >
                        Synopsis Evaluation
                      </td>
                      <td>Successful</td>
                    </tr>
                    <tr
                      style={{ color: "#333333", backgroundColor: "#F7F6F3" }}
                    >
                      <td
                        valign="top"
                        style={{
                          backgroundColor: "#E9ECF1",
                          fontWeight: "bold",
                          width: "20%",
                        }}
                      >
                        Thesis Evaluation
                      </td>
                      <td>Successful</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Box>
          </>
        )}
      </div>
    </>
  );
}
