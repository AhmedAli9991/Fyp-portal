const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  departmentName: { type: String },
  departmentShortName: { type: String },
  enable: { type: Boolean, default: true },
  isAcademic: { type: Boolean, default: true },
});

module.exports = mongoose.model("Department", departmentSchema);
