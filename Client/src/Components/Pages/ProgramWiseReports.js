import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function EvaluateSynopsisPhD() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    /* axios.post("${process.env.REACT_APP_URL}auth/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        const data = res.data.user;
	console.log(data);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      }); */
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="demo-simple-select-label">Track</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //v
            label="Track"
            //onChange={handleChange}
          >
            <MenuItem value="Regular">Regular</MenuItem>
            <MenuItem value="By Publication">By Publication</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="demo-simple-select-label">Program</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //v
            label="Program"
            //onChange={handleChange}
          >
            <MenuItem value="14">MS (CS)</MenuItem>
            <MenuItem value="15">MS (SE)</MenuItem>
            <MenuItem value="16">MS (IS)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="demo-simple-select-label">Session</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Session"
          >
            <MenuItem value="1036">FALL 2021</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="demo-simple-select-label">Registration No</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Registration No"
          >
            <MenuItem value="6001">FA19-RCS-008</MenuItem>
            <MenuItem value="5959">FA19-RCS-017</MenuItem>
            <MenuItem value="5951">FA19-RCS-021</MenuItem>
            <MenuItem value="6029">FA19-RCS-023</MenuItem>
            <MenuItem value="5987">FA19-RCS-024</MenuItem>
            <MenuItem value="5960">FA19-RCS-026</MenuItem>
            <MenuItem value="6101">FA19-RCS-030</MenuItem>
            <MenuItem value="6015">FA19-RCS-033</MenuItem>
            <MenuItem value="6048">FA19-RCS-046</MenuItem>
            <MenuItem value="5937">FA19-RCS-050</MenuItem>
            <MenuItem value="6055">FA19-RCS-058</MenuItem>
            <MenuItem value="5942">FA19-RCS-066</MenuItem>
            <MenuItem value="6007">FA19-RCS-075</MenuItem>
            <MenuItem value="5980">FA19-RCS-089</MenuItem>
            <MenuItem value="6086">FA20-RCS-015</MenuItem>
            <MenuItem value="5936">FA20-RCS-020</MenuItem>
            <MenuItem value="5930">FA20-RCS-021</MenuItem>
            <MenuItem value="6088">FA20-RCS-034</MenuItem>
            <MenuItem value="5978">SP18-RCS-013</MenuItem>
            <MenuItem value="1495">SP18-RCS-034</MenuItem>
            <MenuItem value="5950">SP19-RCS-009</MenuItem>
            <MenuItem value="6012">SP19-RCS-014</MenuItem>
            <MenuItem value="5963">SP19-RCS-018</MenuItem>
            <MenuItem value="6013">SP19-RCS-021</MenuItem>
            <MenuItem value="5974">SP19-RCS-032</MenuItem>
            <MenuItem value="6033">SP19-RCS-045</MenuItem>
            <MenuItem value="5966">SP19-RCS-048</MenuItem>
            <MenuItem value="5956">SP19-RCS-051</MenuItem>
            <MenuItem value="6011">SP19-RCS-059</MenuItem>
            <MenuItem value="6064">SP20-RCS-005</MenuItem>
            <MenuItem value="5932">SP20-RCS-013</MenuItem>
            <MenuItem value="6073">SP20-RCS-016</MenuItem>
            <MenuItem value="6014">SP20-RCS-054</MenuItem>
            <MenuItem value="6068">SP20-RCS-065</MenuItem>
            <MenuItem value="6066">SP20-RCS-069</MenuItem>
            <MenuItem value="6078">SP20-RCS-070</MenuItem>
            <MenuItem value="6016">SP20-RCS-072</MenuItem>
          </Select>
        </FormControl>
      </Box>

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
                  <td>FA17-PCS-005</td>
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
                  <td>HAROON HAIDER KHAN</td>
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
                  <td>FA17-PCS-005@isbstudent.comsats.edu.pk</td>
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
                  <td>PhD (CS)</td>
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
                  <td>FA18</td>
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
                  <td>FALL 2019</td>
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
                  <td>
                    Handling Pixel Entropy with Deep Dynamic Semantic
                    Segmentation Model{" "}
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
                    Area of Specialization
                  </td>
                  <td>
                    ARTIFICIAL INTELLIGENCE , MACHINE LEARNING , DEEP LEARNING
                  </td>
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
                  <td>Dr. Majid Iqbal Khan</td>
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
                  <td>Dr. Tehseen Zia</td>
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
                      href="Files/PhD/Synopsis/Synopsis_fa17-pcs-005.pdf"
                      target="_blank"
                    >
                      Synopsis_fa17-pcs-005.pdf
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
          {" "}
          <table className="border table table-sm">
            <tbody>
              <tr>
                <th colSpan={4}>
                  <b>
                    After in depth examination of the manuscript following are
                    the recommendations of GAC member
                  </b>
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  The candidate is recommended to do <b>minor</b> changings.
                </td>
                <td>
                  A candidate has to re-submit manuscript (e.g. within 4 weeks
                  for PhD student and 1 week for MS Student).
                </td>
                <td>
                  <input
                    id="ContentPlaceHolder1_rbtnMinor"
                    type="radio"
                    name="ctl00$ContentPlaceHolder1$againcb"
                    defaultValue="rbtnMinor"
                    defaultChecked="checked"
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  The candidate is recommended to do <b>major</b> changings.
                </td>
                <td>Candidate has to appear in next semester. </td>
                <td>
                  <input
                    id="ContentPlaceHolder1_rbtnMajor"
                    type="radio"
                    name="ctl00$ContentPlaceHolder1$againcb"
                    defaultValue="rbtnMajor"
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  The candidate is <b>not allowed</b> to resubmit the same
                  manuscript for reexamination
                </td>
                <td>
                  Candidate has to appear in next semester with different idea.
                </td>
                <td>
                  <input
                    id="ContentPlaceHolder1_rbtnNotAllowed"
                    type="radio"
                    name="ctl00$ContentPlaceHolder1$againcb"
                    defaultValue="rbtnNotAllowed"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <TextField
            color="secondary"
            fullWidth
            sx={{ marginTop: "15px", marginBottom: "15px" }}
            id="outlined-multiline-flexible"
            label="Comments"
            multiline
            maxRows={8}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
          >
            Submit
          </Button>
        </div>
      </div>
    </Box>
  );
}
