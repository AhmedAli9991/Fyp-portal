import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};
const API_Programs = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const getPrograms = async () => {
  let token = getToken();
  try {
    const { data } = await API_Programs.get("/programs", {
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
const addPrograms = async (data) => {
  let token = getToken();
  try {
    const res = await API_Programs.post("programs/add-program", data, {
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
const programsService = {
  addPrograms,
  getPrograms,
};
export default programsService;
