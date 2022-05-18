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
const Program = require("../models/program");
const Faculty = require("../models/faculty");
const SupervisoryCommittee = require("../models/supervisoryCommittee");

router.get("/", auth.verifyUser, auth.checkAdmin, (req, res) => {
  User.find({ _id: req.user._id }, { hash: 1, salt: 1, password: 1 })
    .populate("faculty_id")
    .exec()
    .then((admin) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(admin);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.get(
  "/faculty",
  // auth.verifyUser,
  // auth.checkAdmin,
  async (req, res, next) => {
    try {
      const faculty = await Faculty.find({});
      res.json({ facultylist: faculty });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);
router.get(
  "/faculty/:id",
  // auth.verifyUser,
  // auth.checkAdmin,
  async (req, res, next) => {
    try {
      const singleFaculty = await Faculty.findById(req.params.id);
      res.json(singleFaculty);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.delete(
  "/faculty/:id",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      await Faculty.findByIdAndDelete(req.params.id);
      await User.findOneAndDelete({ faculty_id: req.params.id });
      res.json({ msg: "Faculty Record Deleted" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.patch(
  "/faculty/:id",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    const { email, fullName, userRole } = req.body;
    try {
      const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body);
      const user = await User.findOneAndUpdate(
        { faculty_id: req.params.id },
        req.body
      );
      res.json({ msg: "Faculty Record Updated" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.get(
  "/committee",
  // auth.verifyUser,
  // auth.checkAdmin,
  async (req, res, next) => {
    try {
      const committeeData = await SupervisoryCommittee.find()
        .populate("student_id")
        .populate({
          path: "committee",
          populate: [{ path: "faculty_id", model: "Faculty" }],
        })
        .exec();

      res.json(committeeData);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.post(
  "/addcommittee/:id",
  // auth.verifyUser,
  // auth.checkAdmin,
  async (req, res, next) => {
    try {
      const newcommit = await SupervisoryCommittee.create({
        student_id: req.params.id,
        committee: req.body.committee,
      });
      res.json({ msg: "Commitee assigned to Student" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.patch(
  "/updatecommittee/:id",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      const newcommit = await SupervisoryCommittee.findByIdAndUpdate(
        req.params.id,
        { committee: req.body }
      );
      res.json({ msg: "Commitee Updated" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.delete(
  "/deletecommittee/:id",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      const newcommit = await SupervisoryCommittee.findByIdAndDelete(
        req.params.id
      );
      res.json({ msg: "Commitee Deleted" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.get(
  "/getallstudents",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      const newcommit = await Student.find({});
      res.json({ studentlist: newcommit });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.patch(
  "/student/:id",
  // auth.verifyUser, auth.checkStudent,
  async (req, res) => {
    console.log("Req", req);
    // let needs = await helpers.studentUpdateNeeds(req);
    await User.findOneAndUpdate(
      { student_id: req.params.id },
      { $set: req.body }
    )
      .then(async () => {
        await Student.findOneAndUpdate(
          { _id: req.params.id },
          {
            $set: req.body,
          },
          { upsert: true }
        )
          .then((faculty) => {
            res.setHeader("Content-Type", "application/json");
            res
              .status(200)
              .json({ beforeUpdate: faculty, afterUpdate: req.body });
          })
          .catch((err) => {
            res.setHeader("Content-Type", "application/json");
            res.status(500).json({ success: false, message: err.message });
          });
      })
      .catch((err) => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({ success: false, message: err.message });
      });
  }
);

module.exports = router;
