const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evaluationStatusSchema = new Schema({
  evaluationStatus: { type: String /* required: true */ },
  description: { type: String },
  isActive: { type: Boolean /* required: true  */ },
  createdDate: { type: Date },
});
module.exports = mongoose.model("EvaluationStatus", evaluationStatusSchema);
