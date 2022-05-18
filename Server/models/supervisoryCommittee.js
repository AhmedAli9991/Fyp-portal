const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supervisoryCommitteeSchema = new Schema({
  student_id: { type: mongoose.Types.ObjectId, ref: "Student" },
  committee: { type: [{ type: mongoose.Types.ObjectId, ref: "User" }] },
});

module.exports = mongoose.model(
  "SupervisoryCommittee",
  supervisoryCommitteeSchema
);
