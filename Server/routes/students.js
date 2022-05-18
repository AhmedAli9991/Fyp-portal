const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const User = require("../models/user");
const Student = require("../models/student");
const auth = require("../auth/authenticate");
const helpers = require("../helpers/helpers");
const SynopsisSubmission = require("../models/synopsisSubmission");
const Notification = require("../models/notification");
const Announcement = require("../models/announcement");
const path = require("path");
const thesisSubmission = require("../models/thesisSubmission");
const session = require("../models/session");
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

var uploadProfile = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => {
    // Allowed ext
    const filetypes = /jpeg|png|jpg/;
    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: File Format not Supported", false);
    }
  },
}).single("profilePic");

//studentDashboard Route == /students

// router.get(
//   "/",
//   auth.verifyUser,

//   (req, res) => {
//     User.find({ _id: req.user._id }, { hash: 0, salt: 0, password: 0 })
//       .populate({
//         path: "student_id",
//         populate: [
//           {
//             path: "program_id",
//             model: "Program",
//           },
//           {
//             path: "synopsisSession_id",
//             model: "Session",
//           },
//           {
//             path: "supervisor_id",
//             model: "Faculty",
//           },
//           {
//             path: "coSupervisor_id",
//             model: "Faculty",
//           },
//         ],
//       })
//       .exec()
//       .then((student) => {
//         res.setHeader("Content-Type", "application/json");
//         res.status(200).json(student);
//       })
//       .catch((err) => {
//         res.setHeader("Content-Type", "application/json");
//         res.status(500).json({ success: false, message: err.message });
//       });
//   }
// );
router.get(
  "/",
  // auth.verifyUser,
  (req, res) => {
    Student.find({})
      .populate("program_id")
      .populate("synopsisSession_id")
      .populate("supervisor_id")
      .populate("coSupervisor_id")
      .exec()
      .then((student) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(student);
      })
      .catch((err) => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({ success: false, message: err.message });
      });
  }
);

router.get("/supervisors", auth.verifyUser, (req, res) => {
  console.log("supervisors");
  User.find(
    { "userRole.role": "SUPERVISOR", "userRole.enable": true },
    { username: 1 }
  )
    .populate("faculty_id")
    .exec()

    .then((supervisors) => {
      console.log("here");
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ success: true, supervisors });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});
//signleStudent by ID route== students/:id

router.get("/:id", auth.verifyUser, auth.checkStudent, (req, res) => {
  Student.find({ _id: req.params._id })
    .then((students) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(students);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

//delete Student by ID route== students/delete/:id
router.delete(
  "/delete/:id",
  // auth.verifyUser, auth.checkStudent,
  (req, res) => {
    User.findOneAndDelete({ student_id: req.params.id });
    Student.findByIdAndDelete(req.params.id)
      .then((students) => {
        res
          .status(200)
          .json({ success: true, message: "Student successfully deleted!" });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: err.message });
      });
  }
);

//update student profile route == students/:id

router.patch(
  "/",
  // auth.verifyUser, auth.checkStudent,
  async (req, res) => {
    uploadProfile(req, res, async function (err) {
      const body = req.body;

      if (err instanceof multer.MulterError) {
        console.log("mul", err);

        res.setHeader("Content-Type", "application/json");

        return res.status(500).json({ success: false, message: err });
      } else if (err) {
        res.setHeader("Content-Type", "application/json");

        return res.status(500).json({ success: false, message: err });
      } else {
        console.log("Req", req);
        let needs = await helpers.studentUpdateNeeds(req);
        await User.findOneAndUpdate(
          { _id: req.user._id },
          { $set: { username: body.name } }
        )
          .then(async () => {
            if (needs.programShortName.toLowerCase().includes("ms")) {
              await Student.findOneAndUpdate(
                { _id: needs.student_id },
                {
                  $set: {
                    username: body.name,
                    fatherName: body.fatherName,
                    mobile: body.mobile,
                    supervisor_id: body.supervisor,
                    coSupervisor_id: body.coSupervisor,
                    synopsisTitle: body.synopsisTitle,
                    thesisRegistration: body.thesisRegistration,
                    thesisTrack: body.thesisTrack,
                    profilePicture: `public/uploads/${req.file.filename}`,
                  },
                },
                { upsert: true }
              )
                .then((faculty) => {
                  res.setHeader("Content-Type", "application/json");
                  res
                    .status(200)
                    .json({ beforeUpdate: faculty, afterUpdate: body });
                })
                .catch((err) => {
                  res.setHeader("Content-Type", "application/json");
                  res
                    .status(500)
                    .json({ success: false, message: err.message });
                });
            } else {
              await Student.findOneAndUpdate(
                { _id: needs.student_id },
                {
                  $set: {
                    username: body.name,
                    fatherName: body.fatherName,
                    mobile: body.mobile,
                    supervisor_id: body.supervisor,
                    coSupervisor_id: body.coSupervisor,
                    synopsisTitle: body.synopsisTitle,
                    thesisRegistration: body.thesisRegistration,
                    thesisTrack: body.thesisTrack,
                    totalPublications: body.totalPublications,
                    impactFactorPublications: body.impactFactorPublications,
                    profilePicture: `public/uploads/${req.file.filename}`,
                  },
                },
                { upsert: true }
              )
                .then((faculty) => {
                  res.setHeader("Content-Type", "application/json");
                  res
                    .status(200)
                    .json({ beforeUpdate: faculty, afterUpdate: body });
                })
                .catch((err) => {
                  res.setHeader("Content-Type", "application/json");
                  res
                    .status(500)
                    .json({ success: false, message: err.message });
                });
            }
          })
          .catch((err) => {
            res.setHeader("Content-Type", "application/json");
            res.status(500).json({ success: false, message: err.message });
          });
      }
    });
  }
);

//view notifications
router.get("/notifications", auth.verifyUser, auth.checkStudent, (req, res) => {
  Notification.find({ sentTo: req.user._id })
    .then((notifications) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ success: true, notifications });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});
//view announcements
router.get("/announcements", auth.verifyUser, auth.checkStudent, (req, res) => {
  Announcement.find()
    .then((announcements) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ success: true, announcements });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

//get student session

router.get("/session/:stud_id", (req, res) => {
  Student.findOne({ synopsisSession_id: req.params.stud_id })
    .populate(synopsisSession_id)
    .select({ title: 1 })
    .exec()
    .then((session) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ success: true, session });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

module.exports = router;
