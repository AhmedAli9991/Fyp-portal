const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deadlineSchema = new Schema({
  title: { type: String },
  description: { type: String },
  deadline: { type: Date, required: true },
  creationDate: { type: Date, defualt: Date.now },
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
  isActive: { type: Boolean },
});
