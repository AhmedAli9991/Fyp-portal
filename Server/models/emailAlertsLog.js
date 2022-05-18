const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailAlertsLogSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  eDate: { type: Date },
  SendTo: { type: mongoose.Types.ObjectId, ref: "User" },
  SendToEmail: { type: String },
  IPAddress: { type: String },
  enable: { type: Boolean },
  isSent: { type: Boolean },
  exception: { type: String },
});
module.exports = mongoose.model("EmailAlertsLog", emailAlertsLogSchema);
