const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;
const studentSchema = new Schema({
  username: { type: String },
  fatherName: { type: String },
  registrationNo: { type: String /*required: true */ },
  currentSemesterNo: { type: Number /*required: true */ },
  commencementDate: { type: Date /*required: true */ },
  email: { type: String },
  mobile: { type: String },
  program_id: { type: ObjectId, ref: "Program" },
  courseWorkCompletion: { type: Number /*required: true */ },
  foreignSubmission: { type: Number /*required: true */ },
  otherIssue: { type: String },
  gatSubject: { type: String /*required: true */ },
  status: { type: String },
  supervisor_id: { type: ObjectId, ref: "Faculty" },
  coSupervisor_id: { type: ObjectId, ref: "Faculty" },
  synopsisTitle: { type: String /*required: true */ },
  synopsisSemester: { type: String /*required: true */ },
  thesisTitle: { type: String /*required: true */ },
  track: { type: String },
  thesisTrack: { type: String },
  thesisRegistration: { type: Number /*required: true */ },
  specialization: { type: String /*required: true */ },
  isActive: { type: Boolean, default: true },
  coursesPassed: { type: String },
  profilePicture: { type: String },
  synopsisSession_id: { type: ObjectId, ref: "Session" },
  totalPublications: { type: Number /*required: true */ },
  impactFactorPublications: { type: Number /*required: true */ },
});

module.exports = mongoose.model("Student", studentSchema);
