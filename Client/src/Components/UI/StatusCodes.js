import React from "react";

const StatusCodes = ({ errorCode, message }) => {
  return (
    <div
      style={{
        marginTop: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          borderRight: "2px solid white",
          padding: "0 .5rem 0 0",
        }}
      >
        Error {errorCode}
      </h1>
      <p style={{ color: "whitesmoke", marginLeft: ".5rem" }}>{message}</p>
    </div>
  );
};

export default StatusCodes;
