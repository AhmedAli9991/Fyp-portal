import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};
const API_ProgressReports = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const addProgressReport = async (data) => {
  let token = getToken();
  try {
    const res = await API_ProgressReports.post(
      "progress-report/add-report",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    return res;
  } catch (error) {
    return error.response;
  }
};
const getReports = async () => {
  let token = getToken();
  try {
    const data = await API_ProgressReports.get(
      "/progress-report",

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

const getSingleReport = async (studentId) => {
  let token = getToken();
  try {
    const data = await API_ProgressReports.get(
      `/progress-report/${studentId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response;
  }
};

const updateProgressReport = async (formData, reportId) => {
  let token = getToken();
  try {
    const { data } = await API_ProgressReports.put(
      `progress-report/update-report/${reportId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const progressReportService = {
  addProgressReport,
  getReports,
  getSingleReport,
  updateProgressReport,
};
export default progressReportService;
