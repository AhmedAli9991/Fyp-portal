import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};

export const API_ADMIN = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const scheduleSynopsisMS = async (data) => {
  let token = getToken();
  try {
    const res = await API_ADMIN.post("admin/add-session", data, {
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
const addSupervisoryCommittee = async (data, id) => {
  console.log(data);
  let token = getToken();
  try {
    const res = await API_ADMIN.post(`admin/addcommittee/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};
const deleteSupervisoryCommittee = async (id) => {
  // console.log(data);
  let token = getToken();
  try {
    const res = await API_ADMIN.delete(`admin/deletecommittee/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

const updateSupervisoryCommittee = async (data, id) => {
  // console.log(data);
  let token = getToken();
  try {
    const res = await API_ADMIN.patch(`admin/updatecommittee/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

const getSupervisoryCommittee = async () => {
  // console.log(data);
  let token = getToken();
  try {
    const res = await API_ADMIN.get(`admin/committee`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

const updateStudent = async (formData, id) => {
  let token = getToken();
  try {
    const { data } = await API_ADMIN.patch(`admin/student/${id}`, formData, {
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

const adminService = {
  scheduleSynopsisMS,
  addSupervisoryCommittee,
  getSupervisoryCommittee,
  deleteSupervisoryCommittee,
  updateSupervisoryCommittee,
  updateStudent,
};

export default adminService;
