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

router.get("/", auth.verifyUser, (req, res) => {
  Session.find({})
    .then((session) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(session);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.post("/add-session", auth.verifyUser, auth.checkAdmin, (req, res) => {
  Session.create(req.body)
    .then((session) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(session);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});
router.get("/", auth.verifyUser, auth.checkAdmin, async (req, res, next) => {
  try {
    const sessions = await Session.find({});
    res.json({ sessionlist: sessions });
  } catch (error) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

router.delete(
  "/deletesession/:id",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      const programe = await Session.findByIdAndDelete(req.params.id);
      res.json({ msg: "Session Deleted" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.patch(
  "/updatesession/:id",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      const programe = await Session.findByIdAndUpdate(req.params.id, req.body);
      res.json({ msg: "Session Updated" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

module.exports = router;
