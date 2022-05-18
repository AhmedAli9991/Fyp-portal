const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  logDateTime: { type: Date, default: Date.now },
  ipAddress: { type: String },
  login: { type: String },
});

module.exports = model("Log", logSchema);
