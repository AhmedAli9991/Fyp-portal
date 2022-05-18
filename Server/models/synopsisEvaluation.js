const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const synopsisEvaluationSchema = new Schema({
  schedule_id: { type: mongoose.Types.ObjectId, ref: "SynopsisSchedule" },
  evaluator_id: { type: mongoose.Types.ObjectId, ref: "User" },
  isRequiredAgain: { type: Boolean /* required: true */ },
  evaluationStatus: { type: mongoose.Types.ObjectId, ref: "EvaluationStatus" },
  comments: { type: String /* required: true */ },
  creationDate: { type: Date, default: Date.now() /* required: true */ },
  isActive: { type: Boolean /* required: true */ },
  IP_address: { type: String /* required: true */ },
  goEvaluation: {
    goRequiredAgain: { type: Boolean /* required: true */ },
    goComment: { type: String /* required: true */ },
    finalRecommendation: { type: String },
  },
});

module.exports = mongoose.model("SynopsisEvaluation", synopsisEvaluationSchema);
