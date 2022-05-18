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

export const API_FACULTY = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const getSingleFaculty = async (id) => {
  let token = getToken();
  try {
    const { data } = await API_FACULTY.get(`admin/faculty/${id}`, {
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

const facultyService = {
  getSingleFaculty,
};

export default facultyService;
