const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressReportSchema = new Schema({
  student_id: { type: mongoose.Types.ObjectId, ref: "Student" },
  session_id: { type: mongoose.Types.ObjectId, ref: "Session" },
  status: { type: String /* required: true */ },
  comment: { type: String /* required: true */ },
});

module.exports = mongoose.model("ProgressReport", progressReportSchema);
