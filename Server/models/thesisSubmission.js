const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thesisSubmissionSchema = new Schema({
  program_id: { type: mongoose.Types.ObjectId, ref: "Program" },
  student_id: { type: mongoose.Types.ObjectId, ref: "Student" },
  session_id: { type: mongoose.Types.ObjectId, ref: "Session" },
  supervisor_id: { type: mongoose.Types.ObjectId, ref: "Faculty" },
  coSupervisor_id: { type: mongoose.Types.ObjectId, ref: "Faculty" },
  thesisTitle: { type: String },
  thesisStatus: { type: String },
  synopsisNotification: { type: String /* required: true */ },
  thesisFileName: { type: String /* required: true */ },
  plagiarismReport: { type: String /* required: true */ },
  SpecilizationTrack: { type: String /*required: true */ },
  externalExaminer: { type: String /* required: true */ },
  // thesisPresentationFileName: { type: String /* required: true */ },
  creationDate: { type: Date /* required: true */ },
  isActive: { type: Boolean /* required: true */ },
  ipAddress: { type: String /* required: true */ },
});
module.exports = mongoose.model("ThesisSubmission", thesisSubmissionSchema);
