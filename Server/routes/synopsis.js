const express = require("express");
const router = express.Router();
const User = require("../models/user");
const auth = require("../auth/authenticate");
const multer = require("multer");
const Student = require("../models/student");
const SynopsisSubmission = require("../models/synopsisSubmission");
const path = require("path");
const thesisSubmission = require("../models/thesisSubmission");

const SynopsisSchedule = require("../models/synopsisSchedule");
const SynopsisEvaluation = require("../models/synopsisEvaluation");
const EvaluationStatus = require("../models/evaluationStatus");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /docx|pdf|doc/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Please upload pdf or word files", false);
  }
}
var uploadSynopsis = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).fields([{ name: "synopsisDocument" }, { name: "synopsisPresentation" }]);

var uploadThesis = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).fields([{ name: "thesisDocument" }, { name: "synopsisNotification" }]);

router.get("/synopsis-schedule", auth.verifyUser, (req, res) => {
  SynopsisSchedule.find({})
    .populate("student_id")
    .populate("program_id")
    .then((synopsisSchedule) => {
      console.log(synopsisSchedule);
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(synopsisSchedule);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.post(
  "/add-SynopsisSchedule",
  auth.verifyUser,

  (req, res) => {
    let body = req.body;
    SynopsisSchedule.create({ ...body, scheduledBy: req.user._id })
      .then((synopsisSchedule) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(synopsisSchedule);
      })
      .catch((err) => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({ success: false, message: err.message });
      });
  }
);
router.post(
  "/add-evaluation",
  auth.verifyUser,

  (req, res) => {
    let body = req.body;
    EvaluationStatus.create({ evaluationStatus: body.evaluationStatus })
      .then((evaluationStatus) => {
        SynopsisEvaluation.create({
          ...body,
          evaluationStatus: evaluationStatus?._id,
          evaluator_id: req.user._id,
        })
          .then((synopsisEvaluation) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({ synopsisEvaluation, evaluationStatus });
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
// router.patch(
//   "/update-evaluation",
//   auth.verifyUser,

//   (req, res) => {
//     let body = req.body;

//     SynopsisEvaluation.findOneAndUpdate(
//       { _id: body.synopsisEvaluation_id },
//       {
//         $push: {
//           recommendations: {
//             comment: body.comment,
//             evaluationStatus: body.evaluationStatus,
//             evaluator_id: req.user._id,
//           },
//         },
//       }
//     )
//       .then((synopsisSchedule) => {
//         res.setHeader("Content-Type", "application/json");
//         res.status(200).json(synopsisSchedule);
//       })
//       .catch((err) => {
//         res.setHeader("Content-Type", "application/json");
//         res.status(500).json({ success: false, message: err.message });
//       });
//   }
// );

router.get("/synopsis-evaluation", auth.verifyUser, (req, res) => {
  SynopsisEvaluation.find({})
    .populate("evaluator_id evaluationStatus")
    .populate({
      path: "schedule_id",
      populate: [{ path: "student_id", model: "Student" }],
    })

    .then((synopsisEvaluation) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(synopsisEvaluation);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

// router.get("/synopsis-evaluation", auth.verifyUser, (req, res) => {
//   SynopsisEvaluation.find({})
//     .populate("recommendations.evaluator_id recommendations.evaluationStatus")
//     .populate({
//       path: "schedule_id",
//       populate: [
//         {
//           path: "student_id",
//           model: "Student",
//         },
//         { path: "program_id", model: "Program" },
//         { path: "scheduledBy", model: "User" },
//       ],
//     })
//     .then((synopsisEvaluation) => {
//       res.setHeader("Content-Type", "application/json");
//       res.status(200).json(synopsisEvaluation);
//     })
//     .catch((err) => {
//       res.setHeader("Content-Type", "application/json");
//       res.status(500).json({ success: false, message: err.message });
//     });
// });

router.post(
  "/submit-synopsis",
  auth.verifyUser,
  auth.checkStudent,
  async (req, res) => {
    uploadSynopsis(req, res, async function (err) {
      const { synopsisTitle, supervisor, coSupervisor, synopsisTrack } =
        req.body;

      console.log(req.body);
      console.log(req.files);
      if (err instanceof multer.MulterError) {
        console.log("mul", err);

        res.setHeader("Content-Type", "application/json");

        return res.status(500).json({ success: false, message: err });
      } else if (err) {
        console.log("500", err);
        res.setHeader("Content-Type", "application/json");

        return res.status(500).json({ success: false, message: err });
      } else {
        let studId = await User.findById(
          { _id: req.user._id },
          { student_id: 1 }
        );
        let s_id = await User.findById({ _id: supervisor }, { faculty_id: 1 });
        let cs_id = await User.findById(
          { _id: coSupervisor },
          { faculty_id: 1 }
        );

        SynopsisSubmission.create({
          student_id: studId.student_id,
          supervisor_id: s_id.faculty_id,
          coSupervisor_id: cs_id.faculty_id,
          synopsisTitle,
          SpecilizationTrack: synopsisTrack,
          isActive: false,
          synopsisFileName: `public/uploads/${req.files["synopsisDocument"][0].filename}`,
          synopsisPresentationFileName: `public/uploads/${req.files["synopsisPresentation"][0].filename}`,
        })
          .then(() => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({ success: true, message: "Submitted" });
          })
          .catch((err) => {
            console.log(err.message);
            res.setHeader("Content-Type", "application/json");
            res.status(500).json({ success: false, message: err.message });
          });
      }
    });
  }
);

//get synopsisSubmissions

router.get("/submitted-synopsis", auth.verifyUser, (req, res) => {
  SynopsisSubmission.find({})
    .populate("student_id supervisor_id coSupervisor_id")
    .then((synopsisSubmission) => {
      console.log("submitted", synopsisSubmission);
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(synopsisSubmission);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.post(
  "/submit-thesis",
  auth.verifyUser,
  auth.checkStudent,
  async (req, res) => {
    uploadThesis(req, res, async function (err) {
      const { thesisTitle, supervisor, coSupervisor, thesisTrack } = req.body;

      console.log(req.body);
      console.log(req.files);
      if (err instanceof multer.MulterError) {
        console.log("mul", err);

        res.setHeader("Content-Type", "application/json");

        return res.status(500).json({ success: false, message: err });
      } else if (err) {
        console.log("500", err);
        res.setHeader("Content-Type", "application/json");

        return res.status(500).json({ success: false, message: err });
      } else {
        let studId = await User.findById(
          { _id: req.user._id },
          { student_id: 1 }
        );
        let s_id = await User.findById({ _id: supervisor }, { faculty_id: 1 });
        let cs_id = await User.findById(
          { _id: coSupervisor },
          { faculty_id: 1 }
        );

        thesisSubmission
          .create({
            student_id: studId.student_id,
            supervisor_id: s_id.faculty_id,
            coSupervisor_id: cs_id.faculty_id,
            thesisTitle,
            SpecilizationTrack: thesisTrack,
            isActive: false,
            thesisFileName: `public/uploads/${req.files["thesisDocument"][0].filename}`,
            synopsisNotification: `public/uploads/${req.files["synopsisNotification"][0].filename}`,
          })
          .then(() => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({ success: true, message: "Submitted" });
          })
          .catch((err) => {
            console.log(err.message);
            res.setHeader("Content-Type", "application/json");
            res.status(500).json({ success: false, message: err.message });
          });
      }
    });
  }
);

router.put("/update-synopsis-status", (req, res) => {
  SynopsisSubmission.findOneAndUpdate(
    { student_id: req.body.student_id },
    { thesisStatus: req.body.thesisStatus }
  )
    .then(() => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ success: true, message: "Status Updated" });
    })
    .catch((err) => {
      console.log(err.message);
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});
module.exports = router;
