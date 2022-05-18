import React from "react";

export default function GenerateThesisReport() {
  const alertHandler = () => {
    alert("Report Generated!");
  };

  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              <div className="row">
                <div className="col-md-3">
                  <h5>Track :</h5>
                  <select className="form-control form-control-sm">
                    <option selected="selected" value="Regular">
                      Regular
                    </option>
                    <option value="By Publication">By Publication</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <h5>Program :</h5>
                  <select className="form-control form-control-sm">
                    <option selected="selected" value="14">
                      MS (CS)
                    </option>
                    <option value="15">MS (SE)</option>
                    <option value="16">MS (IS)</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <h5>Session :</h5>
                  <select className="form-control form-control-sm">
                    <option selected="selected" value="1036">
                      FALL 2021
                    </option>
                  </select>
                </div>
                <div className="col-md-3">
                  <h5>Registration No :</h5>
                  <select className="form-control form-control-sm">
                    <option selected="selected" value="5944">
                      FA17-RSE-002
                    </option>
                    <option value="6001">FA19-RCS-008</option>
                    <option value="5959">FA19-RCS-017</option>
                    <option value="5951">FA19-RCS-021</option>
                    <option value="6029">FA19-RCS-023</option>
                    <option value="5987">FA19-RCS-024</option>
                    <option value="5960">FA19-RCS-026</option>
                    <option value="6101">FA19-RCS-030</option>
                    <option value="6015">FA19-RCS-033</option>
                    <option value="6048">FA19-RCS-046</option>
                    <option value="5937">FA19-RCS-050</option>
                    <option value="6055">FA19-RCS-058</option>
                    <option value="5942">FA19-RCS-066</option>
                    <option value="6007">FA19-RCS-075</option>
                    <option value="5980">FA19-RCS-089</option>
                    <option value="6086">FA20-RCS-015</option>
                    <option value="5936">FA20-RCS-020</option>
                    <option value="5930">FA20-RCS-021</option>
                    <option value="6088">FA20-RCS-034</option>
                    <option value="5978">SP18-RCS-013</option>
                    <option value="1495">SP18-RCS-034</option>
                    <option value="5950">SP19-RCS-009</option>
                    <option value="6012">SP19-RCS-014</option>
                    <option value="5963">SP19-RCS-018</option>
                    <option value="6013">SP19-RCS-021</option>
                    <option value="5974">SP19-RCS-032</option>
                    <option value="6033">SP19-RCS-045</option>
                    <option value="5966">SP19-RCS-048</option>
                    <option value="5956">SP19-RCS-051</option>
                    <option value="6011">SP19-RCS-059</option>
                    <option value="6064">SP20-RCS-005</option>
                    <option value="5932">SP20-RCS-013</option>
                    <option value="6073">SP20-RCS-016</option>
                    <option value="6014">SP20-RCS-054</option>
                    <option value="6068">SP20-RCS-065</option>
                    <option value="6066">SP20-RCS-069</option>
                    <option value="6078">SP20-RCS-070</option>
                    <option value="6016">SP20-RCS-072</option>
                  </select>
                </div>
              </div>
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
                          <td>FA17-RSE-002</td>
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
                          <td>Anam Zahra</td>
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
                          <td>FA17-RSE-002@isbstudent.comsats.edu.pk</td>
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
                          <td>MS (CS)</td>
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
                          <td>
                            A LSTM-based Deep Neural Network-Oriented Test Case
                            Prioritization Technique in Continuous Integration
                            (CI) Software Development Practice.
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
                          <td>Software Engineering</td>
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
                          <td>Dr. Saif ur Rehman Khan</td>
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
                          <td>Dr. Inayat-ur-Rehman</td>
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
                              href="Files/MS/Synopsis/Synopsis_FA17-RSE-002.pdf"
                              target="_blank"
                            >
                              Synopsis_FA17-RSE-002.pdf
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
                  <table style={{ width: "100%" }} className="table table-sm">
                    <tbody>
                      <tr>
                        <th colSpan={4}>
                          <b>
                            After in depth examination of the manuscript
                            following are the recommendations of GAC member
                          </b>
                        </th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          The candidate is recommended to do <b>minor</b>{" "}
                          changings.
                        </td>
                        <td>
                          A Candidate has to submit a manuscript within 1 week.
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
                          The candidate is recommended to do <b>major</b>{" "}
                          changings.
                        </td>
                        <td>Candidate has to re-appear in next semester. </td>
                        <td>
                          <input
                            id="ContentPlaceHolder1_rbtnMajor"
                            type="radio"
                            name="ctl00$ContentPlaceHolder1$againcb"
                            defaultValue="rbtnMajor"
                            onclick="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$rbtnMajor\',\'\')', 0)"
                          />
                        </td>
                      </tr>
                      {/*  <tr>
                        <h5>Comments:</h5>
                        <textarea style={{ width: "100%", height: "200px" }} />
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
                          Final Recommendations
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
                          Presentation Required Again?
                        </td>
                        <td>N/A</td>
                      </tr> */}
                    </tbody>
                  </table>
                  <h5>GAC Decision and Recommendations</h5>
                  <textarea style={{ width: "100%", height: "200px" }} />
                  <button
                    className="btn btn-sm btn-dark"
                    type="number"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                    onClick={alertHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
