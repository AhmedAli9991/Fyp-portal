import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import synopsisService from "../../API/synopsis";
import {
  Autocomplete,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EvaluateSynopsisMS() {
  const { currentRole } = useSelector((state) => state.userRoles);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const [schedules, setSchedules] = useState([]);

  const [hasEvaluatedSynopsis, setHasEvaluatedSynopsis] = useState(null);
  const [evaluations, setEvaluations] = useState([]);
  const [selectedSynopsis, setSelectedSynopsis] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState({});
  const [submittedSynopsis, setSubmittedSynopsis] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const schd = await synopsisService.getSynopsisSchedules();
      const alreadyevaluatedSynopsis =
        await synopsisService.getSynopsisEvaluations();
      const alreadysubmittedSynopsis =
        await synopsisService.getSubmittedSynopsis();
      setEvaluations(alreadyevaluatedSynopsis);
      setSchedules(schd);
      setSubmittedSynopsis(alreadysubmittedSynopsis);

      setLoading(true);
    }
    fetchData();
  }, []);

  const handleRegistrationNo = (reg) => {
    setHasEvaluatedSynopsis(false);

    schedules.forEach((oneSchedule) => {
      if (reg === oneSchedule?.student_id?.registrationNo) {
        evaluations.forEach((evaluatedSynopsis) => {
          if (evaluatedSynopsis.schedule_id) {
            if (evaluatedSynopsis.schedule_id._id === oneSchedule._id) {
              if (evaluatedSynopsis.evaluator_id._id === user.user._id) {
                console.log(true);
                setHasEvaluatedSynopsis(true);
              }
            }
          }
        });

        setSelectedSchedule(oneSchedule);

        console.log("Selected Schedule", selectedSchedule);
        setData({ ...data, schedule_id: oneSchedule._id });

        submittedSynopsis.forEach((oneSynopsis) => {
          if (
            selectedSchedule.student_id?._id ===
            submittedSynopsis.student_id?._id
          ) {
            console.log("Selected Synopsis", oneSynopsis);
            setSelectedSynopsis(oneSynopsis);
          }
        });
      }
    });
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await synopsisService.addEvaluation(data);

    // synopsisService.updateEvaluation({
    //   ...data,
    //   synopsisEvaluation_id: res.data.synopsisEvaluation._id,
    //   evaluationStatus: res.data.evaluationStatus._id,
    // });
    // alert(JSON.stringify(data));
  };

  const defaultProps = {
    options: schedules,
    getOptionLabel: (schedule) => schedule?.student_id?.registrationNo || "",
  };

  return (
    loading && (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Autocomplete
            {...defaultProps}
            id="controlled-demo"
            value={autocompleteValue}
            onChange={(value, newValue) => {
              let registrationNo = newValue?.student_id?.registrationNo;
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
        {hasEvaluatedSynopsis ? (
          <p>You have already evaluated this student</p>
        ) : (
          <>
            <div className="row">
              <div className="col-md-12 mt-3">
                <div className="border">
                  <table
                    className="small-12 medium-12 large-12 columns table table-sm"
                    cellSpacing={0}
                    cellPadding={4}
                    id="ContentPlaceHolder1_DetailsView1"
                    style={{ color: "#333333", borderCollapse: "collapse" }}
                  >
                    <tbody>
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
                          Registration No
                        </td>
                        <td>{selectedSchedule?.student_id?.registrationNo}</td>
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
                          Name
                        </td>
                        <td>{selectedSchedule?.student_id?.username}</td>
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
                          Email
                        </td>
                        <td>{selectedSchedule?.student_id?.email}</td>
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
                          Program
                        </td>
                        <td>
                          {selectedSchedule?.program_id?.programShortName}
                        </td>
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
                          Course work completion
                        </td>
                        <td>SPRING 2019</td>
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
                          Comprehensive Exam
                        </td>
                        <td>N/A</td>
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
                          Synopsis Status
                        </td>
                        <td>N/A</td>
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
                          Thesis Title
                        </td>
                        <td>{selectedSchedule?.student_id?.synopsisTitle}</td>
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
                          Area of Specialization
                        </td>
                        <td>{selectedSynopsis?.specializationTrack}</td>
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
                          Foreign Submission
                        </td>
                        <td>N/A</td>
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
                          GAT Subject
                        </td>
                        <td>N/A</td>
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
                        <td>&nbsp;</td>
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
                          Supervisor
                        </td>
                        <td>{selectedSynopsis?.supervisor_id?.fullName}</td>
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
                          Co-Supervisor
                        </td>
                        <td>{selectedSynopsis?.coSupervisor_id?.fullName}</td>
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
                          Synopsis File
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={`${process.env.REACT_APP_URL}/${selectedSynopsis?.synopsisFileName}`}
                            rel="noopener noreferrer"
                          >
                            {selectedSynopsis?.synopsisFileName}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 p-4">
                <table style={{ width: "100%" }} className="table table-sm">
                  {currentRole === "GO" ? (
                    <>
                      <Box
                        sx={{
                          minWidth: 120,
                          marginTop: "1rem",
                        }}
                      >
                        <>
                          <FormControl
                            sx={{ mt: 4 }}
                            fullWidth
                            color="secondary"
                          >
                            <InputLabel>Final Recommendation</InputLabel>
                            <Select
                              variant="outlined"
                              name="finalRecommendation"
                              label="Final Recommendation"
                              onChange={handleChange}
                            >
                              <MenuItem value="Minor Changings">
                                Minor Changings
                              </MenuItem>
                              <MenuItem value="Major Changings">
                                Major Changings
                              </MenuItem>
                              <MenuItem value="Not Allowed">
                                Not Allowed
                              </MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl sx={{ mt: 4 }}>
                            <FormLabel color="secondary">
                              Presentation Required Again?
                            </FormLabel>
                            <RadioGroup
                              row
                              name="goRequiredAgain"
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value="Yes"
                                control={<Radio color="secondary" />}
                                label="Yes"
                              />
                              <FormControlLabel
                                value="No"
                                control={<Radio color="secondary" />}
                                label="No"
                              />
                            </RadioGroup>
                          </FormControl>
                        </>
                      </Box>
                      <TextField
                        fullWidth
                        sx={{ my: 2 }}
                        multiline
                        rows={6}
                        label="GO's Decision and Recommendations"
                        color="secondary"
                        name="goComment"
                        variant="outlined"
                        onChange={handleChange}
                      />
                    </>
                  ) : (
                    <tbody>
                      <tr>
                        <th colSpan={4}>
                          <b>
                            After in depth examination of the manuscript
                            following are the recommendations of GAC member
                          </b>
                        </th>
                      </tr>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <tr>
                            <td>1</td>
                            <td>
                              The candidate is recommended to do <b>minor</b>{" "}
                              changings.
                            </td>
                            <td>
                              A Candidate has to submit a manuscript within 1
                              week.
                            </td>
                            <td>
                              <FormControlLabel
                                value="Minor Changings."
                                control={<Radio color="secondary" />}
                                label=""
                                name="evaluationStatus"
                                onChange={handleChange}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              The candidate is recommended to do <b>major</b>{" "}
                              changings.
                            </td>
                            <td>
                              Candidate has to re-appear in next semester.{" "}
                            </td>
                            <td>
                              <FormControlLabel
                                value="Major Changings."
                                control={<Radio color="secondary" />}
                                label=""
                                name="evaluationStatus"
                                onChange={handleChange}
                              />
                            </td>
                          </tr>
                        </RadioGroup>
                      </FormControl>
                      <TextField
                        fullWidth
                        sx={{ my: 2 }}
                        multiline
                        rows={6}
                        label="Decision and Recommendations"
                        color="secondary"
                        name="comments"
                        variant="outlined"
                        onChange={handleChange}
                      />
                    </tbody>
                  )}
                </table>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </>
        )}
      </Box>
    )
  );
}
