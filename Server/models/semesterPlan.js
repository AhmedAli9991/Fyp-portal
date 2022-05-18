const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const semesterPlanSchema = new Schema({
  session_id: { type: mongoose.Types.ObjectId, ref: "Session" },
  student_id: { type: mongoose.Types.ObjectId, ref: "Student" },
  isThesis: { type: Boolean },
  willAppear: { type: Boolean },
  isActive: { type: Boolean },
  creationDate: { type: Date },
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
  IPAddress: { type: String },
});
module.exports = mongoose.model("SemesterPlan", semesterPlanSchema);
