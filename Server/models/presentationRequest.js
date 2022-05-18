const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presentationRequestSchema = new Schema({
  student_id: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
  },
  session_id: { type: mongodb.Types.ObjectId, ref: "Session" },
  defenseDate: { type: Date, required: true },
  status: { type: String, required: true },
  presentationType: { type: String, required: true },
  creationDate: { type: Date, required: true },
  IP: { type: String, required: true },
  isActive: { type: Boolean, required: true },
});

module.exports = mongoose.model(
  "PresentationRequest",
  presentationRequestSchema
);
