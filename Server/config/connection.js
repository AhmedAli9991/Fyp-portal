const mongoose = require("mongoose");

//Establishin connection with DB

const connection = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      console.log("connetecion Successful to db");
    })
    .catch((error) => {
      console.log("Error connecting to DB", error);
    });
};
module.exports = connection;
