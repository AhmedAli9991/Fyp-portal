// import { API } from "./auth";
import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};

export const API_STUD = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const getStudents = async () => {
  let token = getToken();
  try {
    const { data } = await API_STUD.get("/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async (id) => {
  // console.log(data);
  let token = getToken();
  try {
    const res = await API_STUD.delete(`students/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.message;
  }
};

const getSupervisors = async () => {
  let token = getToken();
  try {
    const { data } = await API_STUD.get("/students/supervisors", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateProfile = async (formData) => {
  let token = getToken();
  try {
    const { data } = await API_STUD.patch(`/students`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const uploadFile = (data) => {
  console.log(data);
  API_STUD.post("/upload", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
const studentService = {
  uploadFile,
  getSupervisors,
  updateProfile,
  getStudents,
  deleteStudent,
};

export default studentService;
