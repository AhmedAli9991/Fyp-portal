import React, { useEffect } from "react";
import ViewAnnouncement from "./ViewAnnouncement";
import ViewNotification from "./ViewNotification";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { currentRole } = useSelector((state) => state.userRoles);

  console.log(currentRole);
  // const userRole = user.user.userRole[0].role;
  const userRole = user.user.userRole;

  console.log(userRole);

  let userProgram;
  if (userRole === "STUDENT") {
    userProgram = user.user.student.program_id.programShortName;
    // console.log(userRole);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <>
        <h1>Welcome!</h1>
        <p> {`Your are logged in as an Admin`}</p>
        {/* <h3> Notification </h3>
          <ViewNotification />
          <h3> Announcement </h3>
          <ViewAnnouncement /> */}
      </>
      {userRole === "STUDENT" && (
        <>
          <h1>Welcome!</h1>
          <p> {`Your are logged in as a ${userRole} Student`}</p>
          <h3> Notification </h3>
          <ViewNotification />
          <h3> Announcement </h3>
          <ViewAnnouncement />
        </>
      )}
      {userRole === "ADMIN" && (
        <>
          <h1>Welcome!</h1>
          <p> {`Your are logged in as a ${userRole} Student`}</p>
          <h3> Notification </h3>
          <ViewNotification />
          <h3> Announcement </h3>
          <ViewAnnouncement />
        </>
      )}
      {userRole === "GAC" && (
        <>
          <h1>Welcome!</h1>
          <p> Your are logged in as GAC</p>
        </>
      )}
      {userRole === "GO" && (
        <>
          <h1>Welcome!</h1>
          <p> Your are logged in as GO</p>
        </>
      )}
      {userRole === "MS" && (
        <>
          <h1>Welcome!</h1>
          <p> {`Your are logged in as a ${userRole} Student`}</p>
          <h3> Notification </h3>
          <ViewNotification />
          <h3> Announcement </h3>
          <ViewAnnouncement />
        </>
      )}
      {userRole === "PhD" && (
        <>
          <h1>Welcome!</h1>
          <p> {`Your are logged in as a ${userRole} Student`}</p>
          <h3> Notification </h3>
          <ViewNotification />
          <h3> Announcement </h3>
          <ViewAnnouncement />
        </>
      )}
      {userRole === "SUPERVISOR" && (
        <>
          <h1>Welcome!</h1>
          <p> Your are logged in as Supervisor</p>
        </>
      )}
      {/* {props.onUser === "GO" && <h1>Welcome! GO</h1>}
      {props.onUser === "MS_COR" && <h1>Welcome! MS Coordinator</h1>}
      {props.onUser === "PHD_COR" && <h1>Welcome! PhD Coordinator</h1>} */}
    </div>
  );
};

export default Home;
