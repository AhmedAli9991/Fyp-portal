const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema({
  programShortName: { type: String /*required: true*/ },
  programLongName: { type: String },
  description: { type: String },
  minSemesters: { type: Number /*required: true*/ },
  maxSemesters: { type: Number /*required: true*/ },
  duration: { type: Number },
  credits: { type: Number },
  enable: { type: Boolean },
  // department_id: { type: mongoose.Types.ObjectId, ref: "Department" },
});
module.exports = mongoose.model("Program", programSchema);
