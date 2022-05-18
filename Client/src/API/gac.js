import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};
const API_GAC = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const gacService = {};

export default gacService;
