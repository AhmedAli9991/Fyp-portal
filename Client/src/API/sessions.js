import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};
const API_SESSIONS = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const getSessions = async () => {
  let token = getToken();
  try {
    const { data } = await API_SESSIONS.get("/sessions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};
const addSession = async (data) => {
  let token = getToken();
  try {
    const res = await API_SESSIONS.post("sessions/add-session", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    return error.response;
  }
};
const sessionsService = {
  addSession,
  getSessions,
};
export default sessionsService;
