import React from "react";
import { programWiseData, programWiseHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function ManageSynopsisSchedule() {
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
      <div className="col-md-2 col-sm-4">View Schedule :</div>
      <DataTable header={programWiseHeader} data={programWiseData} />
    </>
  );
}
