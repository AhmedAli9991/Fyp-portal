import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};

export const API_MSCOR = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const mscorService = {};

export default mscorService;
