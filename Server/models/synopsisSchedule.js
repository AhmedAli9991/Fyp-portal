const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const synopsisScheduleSchema = new Schema({
  student_id: { type: mongoose.Types.ObjectId, ref: "Student" },
  session_id: { type: mongoose.Types.ObjectId, ref: "Session" },
  program_id: { type: mongoose.Types.ObjectId, ref: "Program" },
  defenseDate: { type: Date },
  creationDate: { type: Date, default: Date.now },
  scheduledBy: { type: mongoose.Types.ObjectId, ref: "User" },
  IP: { type: String /*  required: true */ },
  isActive: { type: Boolean, default: true },
  reportDate: { type: Date },
  reportSentDate: { type: Date },
  reportURL: { type: String },
  reportGeneratedBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("SynopsisSchedule", synopsisScheduleSchema);
