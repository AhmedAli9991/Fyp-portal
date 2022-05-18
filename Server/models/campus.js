const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campusSchema = new Schema({
  campusName: { type: String },
  enable: { type: Boolean },
  shortName: { type: String },
  address: { type: String },
});
module.exports = model("Campus", campusSchema);
