import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};
const API_PdfReports = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const generateReport = async (data) => {
  let token = getToken();
  try {
    const res = await API_PdfReports.post("pdfReports/generate-report", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};
const downlaodReport = async (registrationNo) => {
  console.log("registraitionNO", registrationNo);
  window.open(
    `${process.env.REACT_APP_URL}/pdfReports/generate-report/${registrationNo}`
  );
};
const pdfReportsService = {
  generateReport,
  downlaodReport,
};
export default pdfReportsService;
