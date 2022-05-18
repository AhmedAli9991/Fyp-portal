const express = require("express");
const router = express.Router();
const User = require("../models/user");
var passport = require("passport");

//get all users data

router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(users);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({ err });
    });
});

module.exports = router;
