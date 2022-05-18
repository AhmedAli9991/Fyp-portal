import React from "react";
import comsatsLogo from "../../../src/cui.png";

const data = {
  candidateName: "Waqas Zafar",
  registrationNumber: "FA18-BCS-107",
  supervisor: "Dr. Nadeem Javaid",
  dated: "Mar 18, 2022",
  synopsisTitle:
    "Efficient Electricity Theft Detection in Smart Grids using Data Driven Models",
  recommendations: [
    {
      comment:
        'The problem statement focuses on class imbalance, dimension reduction. These are generic issues. Rather the candidate should focus on the limitations of the techniques in literature. The manuscipt is written in a bt informal way. For example in the sentence "Therefore, ETD is an important thing and needs immediate attention to avoid ever-increasing electricity theft rate. Keeping this" avoid using the words like "thing" etc. Comparisons should be done with the relevant baseline techniques rather than any arbitrary techniques. Discussion on handling the identical issues should be is a way such that they are aligned with the objectives of the proposed research.',
      evaluatorName: "Dr. Assad Abbas",
      evaluationStatus: "Minor Changings",
      isRequiredAgain: "No",
    },
    {
      comment:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      evaluatorName: "Dr. Basit Raza",
      evaluationStatus: "Major Changings",
      isRequiredAgain: "Yes",
    },
  ],
};

export default function ViewStudentDetail() {
  /* const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted")
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    axios.post("${process.env.REACT_APP_URL}auth/login", {
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
      });}; */
  return (
    <>
      <div className="col-md-2 col-sm-4">Registration No :</div>
      <select className="form-control form-control-sm  col-md-10 col-sm-8">
        <option selected="selected" value="3574">
          FA13-PCS-002
        </option>
        <option value="2507">FA13-PCS-003</option>
        <option value="2502">FA13-PCS-004</option>
        <option value="3573">FA13-PCS-007</option>
        <option value="3895">FA14-PCS-001</option>
        <option value="3696">FA14-PCS-003</option>
        <option value="3680">FA14-PCS-004</option>
        <option value="1436">FA14-PCS-007</option>
        <option value="3688">FA14-PCS-010</option>
        <option value="2510">FA14-PCS-011</option>
        <option value="3880">FA14-PCS-014</option>
        <option value="2511">FA15-PCS-001</option>
        <option value="3693">FA15-PCS-005</option>
        <option value="3681">FA15-PCS-007</option>
        <option value="3700">FA16-PCS-001</option>
        <option value="3652">FA16-PCS-003</option>
        <option value="1385">FA16-PCS-004</option>
        <option value="1434">FA16-PCS-007</option>
        <option value="5924">FA17-PCS-001</option>
        <option value="2512">FA17-PCS-003</option>
        <option value="3679">FA17-PCS-005</option>
        <option value="3711">FA17-PCS-007</option>
        <option value="3596">FA17-PCS-008</option>
        <option value="3572">FA17-PCS-013</option>
        <option value="1387">FA17-PCS-014</option>
        <option value="1499">FA18-PCS-001</option>
        <option value="3581">FA18-PCS-002</option>
        <option value="3722">FA18-PCS-004</option>
        <option value="3685">FA19-PCS-002</option>
        <option value="5920">FA20-PCS-002</option>
        <option value="6070">FA20-PCS-003</option>
        <option value="6071">FA20-PCS-004</option>
        <option value="3584">SP00-PCS-000</option>
        <option value="1487">SP14-PCS-007</option>
        <option value="3701">SP15-PCS-001</option>
        <option value="3575">SP15-PCS-002</option>
        <option value="1383">SP15-PCS-003</option>
        <option value="1428">SP15-PCS-004</option>
        <option value="6098">SP15-PCS-005</option>
        <option value="2514">SP15-PCS-006</option>
        <option value="2503">SP17-PCS-001</option>
        <option value="3594">SP17-PCS-005</option>
        <option value="3697">SP18-PCS-001</option>
        <option value="239">SP18-PCS-003</option>
        <option value="3576">SP18-PCS-004</option>
        <option value="3689">SP19-PCS-001</option>
        <option value="5917">SP19-PCS-004</option>
        <option value="3698">SP20-PCS-001</option>
        <option value="4918">SP20-PCS-003</option>
        <option value="5923">SP21-PCS-001</option>
        <option value="5918">SP21-PCS-003</option>
        <option value="5916">SP21-PCS-005</option>
      </select>

      <div className="col-lg-12 mt-2">
        <table
          className="small-12 medium-12 large-12 columns table table-sm"
          cellSpacing={0}
          cellPadding={4}
          id="ContentPlaceHolder1_DetailsView1"
          style={{
            color: "#333333",
            height: "50px",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Registration No
              </td>
              <td>FA13-PCS-002</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Name
              </td>
              <td>Rubina Ghazal</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Email
              </td>
              <td>rubinaghazal78@hotmail.com</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Program
              </td>
              <td>PhD (CS)</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Course work completion
              </td>
              <td>FA14</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Comprehensive Exam
              </td>
              <td>FA16</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Synopsis Status
              </td>
              <td>Accepted</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Thesis Status
              </td>
              <td>N/A</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Foreign Submission
              </td>
              <td>N/A</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                GAT Subject
              </td>
              <td>N/A</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Status
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Supervisor
              </td>
              <td>Dr. Malik Ahmad Kamran</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Co-Supervisor
              </td>
              <td>Dr. Basit Raza</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Other Issue
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Synopsis File
              </td>
              <td>
                <a href="Files/PhD/Synopsis/" target="_blank" />
              </td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Synopsis Presentation
              </td>
              <td>
                <a href="Files/PhD/Synopsis/Presentations/" target="_blank" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
