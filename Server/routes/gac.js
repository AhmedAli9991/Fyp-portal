const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Student = require("../models/student");
const auth = require("../auth/authenticate");
const helpers = require("../helpers/helpers");
const SynopsisSubmission = require("../models/synopsisSubmission");
const Notification = require("../models/notification");
const Announcement = require("../models/announcement");
const Session = require("../models/session");

//studentDashboard Route == /students

router.get("/students", auth.verifyUser, auth.checkGAC, (req, res) => {
  Student.find({})
    .populate("program_id")
    .populate("synopsisSession_id")
    .populate("supervisor_id")
    .exec()
    .then((student) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(student);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

module.exports = router;
