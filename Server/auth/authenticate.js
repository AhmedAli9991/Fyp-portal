var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens

var User = require("../models/user");
var Student = require("../models/student");
require("dotenv").config();
exports.local = passport.use(
  new LocalStrategy({ usernameField: "email" }, User.authenticate())
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function (user) {
  return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 36000 });
};
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload._id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

exports.verifyUser = passport.authenticate("jwt", { session: false });

module.exports.checkStudent = (req, res, next) => {
  if (!req.user) {
    res.statusCode = 401;
    res.json({ success: false, message: "You are not authenticated!" });
  } else {
    User.findOne({ _id: req.user._id }, (err, user) => {
      if (err) {
        return next(err);
      } else if (
        user.userRole.some(
          (userrole) => userrole.role === "STUDENT" && userrole.enable === true
        )
      ) {
        return next();
      } else {
        res.send("You are not allowed to perform this operation");
      }
    });
  }
};
module.exports.checkAdmin = (req, res, next) => {
  console.log(req.user._id);
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (!req.user) {
      res.statusCode = 401;
      res.json({ success: false, message: "You are not authenticated!" });
    } else {
      if (err) {
        return next(err);
      } else if (
        user.userRole.some(
          (userrole) => userrole.role === "ADMIN" && userrole.enable === true
        )
      ) {
        return next();
      } else {
        res.send("You are not allowed to perform this operation");
      }
    }
  });
};
module.exports.checkGAC = (req, res, next) => {
  console.log(req.user._id);
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (!req.user) {
      res.statusCode = 401;
      res.json({ success: false, message: "You are not authenticated!" });
    } else {
      if (err) {
        return next(err);
      } else if (
        user.userRole.some(
          (userrole) => userrole.role === "GAC" && userrole.enable === true
        )
      ) {
        return next();
      } else {
        res.send("You are not allowed to perform this operation");
      }
    }
  });
};

module.exports.checkGO = (req, res, next) => {
  console.log(req.user._id);
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (!req.user) {
      res.statusCode = 401;
      res.json({ success: false, message: "You are not authenticated!" });
    } else {
      if (err) {
        return next(err);
      } else if (
        user.userRole.some(
          (userrole) => userrole.role === "GO" && userrole.enable === true
        )
      ) {
        return next();
      } else {
        res.send("You are not allowed to perform this operation");
      }
    }
  });
};
module.exports.checkSupervisor = (req, res, next) => {
  console.log(req.user._id);
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (!req.user) {
      res.statusCode = 401;
      res.json({ success: false, message: "You are not authenticated!" });
    } else {
      if (err) {
        return next(err);
      } else if (
        user.userRole.some(
          (userrole) =>
            userrole.role === "SUPERVISOR" && userrole.enable === true
        )
      ) {
        return next();
      } else {
        res.send("You are not allowed to perform this operation");
      }
    }
  });
};
module.exports.checkMSCOR = (req, res, next) => {
  console.log(req.user._id);
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (!req.user) {
      res.statusCode = 401;
      res.json({ success: false, message: "You are not authenticated!" });
    } else {
      if (err) {
        return next(err);
      } else if (
        user.userRole.some(
          (userrole) => userrole.role === "MS_COR" && userrole.enable === true
        )
      ) {
        return next();
      } else {
        res.send("You are not allowed to perform this operation");
      }
    }
  });
};
module.exports.checkPHDCOR = (req, res, next) => {
  console.log(req.user._id);
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (!req.user) {
      res.statusCode = 401;
      res.json({ success: false, message: "You are not authenticated!" });
    } else {
      if (err) {
        return next(err);
      } else if (
        user.userRole.some(
          (userrole) => userrole.role === "PHD_COR" && userrole.enable === true
        )
      ) {
        return next();
      } else {
        res.send("You are not allowed to perform this operation");
      }
    }
  });
};
