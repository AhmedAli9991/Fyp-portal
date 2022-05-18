const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  title: { type: String /* required: true */ },
  description: { type: String /* required: true */ },
  status: { type: Boolean /* required: true */ },
  creationDate: { type: Date, /* required: true */ default: Date.now },
});
module.exports = mongoose.model("Session", sessionSchema);
