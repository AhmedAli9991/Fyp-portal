const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Student = require("../models/student");
const auth = require("../auth/authenticate");

const ProgressReport = require("../models/progressReport");

router.get("/", (req, res) => {
  ProgressReport.find({})
    .populate("student_id session_id")
    .populate({
      path: "student_id",
      populate: { path: "program_id" },
    })
    // .populate({
    //   path: "student_id",
    //   populate: { path: "coSupervisor_id" },
    // })
    // .populate({
    //   path: "student_id",
    //   populate: { path: "supervisor_id" },
    // })
    .exec()
    .then((progressReports) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(progressReports);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.get("/:studentId", (req, res) => {
  ProgressReport.findOne({ student_id: req.params.studentId })
    .populate("student_id session_id")
    .exec()
    .then((progressReport) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(progressReport);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.delete("/delete/:id", (req, res) => {
  ProgressReport.findOneAndDelete(req.params.id)
    .then((progressReports) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ message: "Deleted Successfuly", progressReports });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.post("/add-report", (req, res) => {
  ProgressReport.create(req.body)
    .then((progressReport) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ message: "Added Successfuly", progressReport });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});
router.put("/update-report/:id", (req, res) => {
  const { student_id, session_id, status, comment } = req.body;

  ProgressReport.findOneAndUpdate(
    { _id: req.params.id },
    {
      student_id: student_id,
      session_id: session_id,
      comment: comment,
      status: status,
    }
  )
    .then((progressReport) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ message: "Updated Successfuly", progressReport });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

module.exports = router;
