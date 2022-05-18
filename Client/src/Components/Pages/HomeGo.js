import React from "react";
import ViewAnnouncement from "./ViewAnnouncement";
import ViewNotification from "./ViewNotification";
import { useSelector } from "react-redux";

const HomeGo = () => {
  const { user } = useSelector((state) => state.auth);
  const userRole = user.user.userRole[0].role;
  let userProgram;
  if (userRole === "STUDENT") {
    userProgram = user.user.student.program_id.programShortName;
    // console.log(userRole);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome!</h1>
      <p> {`Your are logged in as GO`}</p>
      {/* <h3> Notification </h3>
      <ViewNotification />
      <h3> Announcement </h3>
      <ViewAnnouncement /> */}
    </div>
  );
};

export default HomeGo;
