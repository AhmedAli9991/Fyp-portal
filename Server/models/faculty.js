const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facultySchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  fullName: {
    type: String,
    set: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  father_HusbandName: { type: String },
  nationality: { type: String },
  country: { type: String },
  city: { type: String },
  email: { type: String },
  department: { type: String },
  campus: { type: String },
  department_id: { type: Schema.Types.ObjectId, ref: "Department" },
  campusName: { type: String },

  enable: { type: Boolean, default: true },
  isActive: { type: Boolean, default: true },
  designation: { type: String },
  priority: { type: Number },
  isSubscribed: { type: Boolean },
});

module.exports = mongoose.model("Faculty", facultySchema);
