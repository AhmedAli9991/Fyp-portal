const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const availableEvaluatorSchema = new Schema({
  presentationRequest_id: {
    type: mongoose.Types.ObjectId,
    ref: "PresentaionRequest",
  },
  user_id: { type: mongoose.Types.ObjectId, ref: "User" },
  isAvailable: { type: mongoose.Types.Boolean, required: true },
  creationDate: { type: Date, required: true },
  IP: { type: String, required: true },
});
