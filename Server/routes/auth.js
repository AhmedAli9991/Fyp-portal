const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Student = require("../models/student");
var passport = require("passport");
const helpers = require("../helpers/helpers");
const Faculty = require("../models/faculty");
const auth = require("../auth/authenticate");
const signupMail = require("../helpers/mailing");

router.post("/signup", async (req, res, next) => {
  const user = req.body;
  console.log(user);
  if (user.userRole === "STUDENT") {
    // let needs = await helpers.studentSignUpNeeds(user);
    let exists = await Student.findOne({ registrationNo: user.registrationNo });
    if (exists) {
      res.statusCode = 409;
      console.log("conflict");
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        message: "Student with the same reg number already exists",
      });
    } else {
      Student.create({
        ...user,

        // synopsisSession_id: needs.session._id,
      })
        /* supervisor_id: needs.supervisor._id,
        coSupervisor_id: needs.coSupervisor._id, */

        .then((student) => {
          console.log("Student created " + student._id);
          User.register(
            new User({
              username: user.username,
              email: user.email,
              student_id: student._id,
              userRole: { role: "STUDENT" },
            }),
            req.body.password,
            (err, user) => {
              if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.json({ err: err.message });
              } else {
                passport.authenticate("local")(req, res, () => {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  // signupMail(user.email);
                  res.json({
                    success: true,
                    status: "Registration Successful!",
                  });
                });
              }
            }
          );
        })
        .catch((err) => {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.json({ err: err.message });
        });
    }
  } else {
    let exists = await Faculty.findOne({ email: user.email });
    if (exists) {
      res.statusCode = 409;
      console.log("conflict");
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        message: "Faculty with the same email already exists",
      });
    } else {
      Faculty.create(user)
        .then((faculty) => {
          User.register(
            new User({
              email: user.email,
              username: user.fullName,
              faculty_id: faculty._id,

              userRole: user.userRole,
            }),
            req.body.password,
            (err, user) => {
              if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.json({ err });
              } else {
                passport.authenticate("local")(req, res, () => {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  console.log("faculty role" + user.userRole);

                  res.json({
                    success: true,
                    status: "Registration Successful!",
                  });
                });
              }
            }
          );
        })
        .catch((err) => {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.json({ err: err.message });
        });
    }
  }
});

router.post("/login", passport.authenticate("local"), async (req, res) => {
  var token = auth.getToken({ _id: req.user._id });
  let user_info = {};
  try {
    let user = await User.findOne({ _id: req.user._id });
    if (user.student_id) {
      let student = await Student.findOne({ _id: user.student_id })
        .populate("program_id")
        .exec();
      user_info.student = student;
      user_info.userRole = user.userRole;
      user_info._id = req.user._id;

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        token,
        status: "You are successfully logged in!",
        user: user_info,
      });
    } else {
      if (user.faculty_id) {
        let faculty = await Faculty.findOne({ _id: user.faculty_id }, {});
        user_info.faculty = faculty;
        user_info.userRole = user.userRole;
        user_info._id = req.user._id;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: true,
          token,
          status: "You are successfully logged in!",
          user: user_info,
        });
      }
    }
  } catch {
    let err = new Error("An error occurred");
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ err });
  }
});

router.get("/logout", (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    req.session.destroy();
    res.clearCookie("cui-gp-portal");
  } else {
    res.status(401).json({ success: false, message: "You are not logged in!" });
  }
});

//change password
router.post("/change-password", auth.verifyUser, (req, res) => {
  // const user = User.findOne({_id:req.user._id})
  req.user
    .changePassword(req.body.oldPassword, req.body.newPassword)
    .then((user) => {
      Student.findOne({ _id: user.student_id })
        .then((student) => {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json({ success: true, message: "Password Updated" });
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
});

module.exports = router;
