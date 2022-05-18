const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thesisScheduleSchema = new Schema({
  student_id: { type: mongoose.Types.ObjectId, ref: "Student" },
  session_id: { type: mongoose.Types.ObjectId, ref: "Session" },
  defenseDate: { type: Date, required: true },
  reportURL: { type: String },

  reportGeneratedBy: { type: mongoose.Types.ObjectId, ref: "User" },
  creationDate: { type: Date, required: true },
  scheduledBy: { type: mongoose.Types.ObjectId, ref: "User" },
  IP: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  reportDate: { type: Date },
  reportSentDate: { type: Date },
});

module.exports = mongoose.model("ThesisSchedule", thesisScheduleSchema);
