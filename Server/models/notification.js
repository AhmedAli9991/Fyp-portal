const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  notification: { type: String, required: true },
  sentTo: { type: mongoose.Types.ObjectId, ref: "User" },
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
  creationDate: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  isRead: { type: Boolean },
});
module.exports = mongoose.model("Notification", notificationSchema);
