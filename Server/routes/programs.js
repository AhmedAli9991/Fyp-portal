const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Student = require("../models/student");
const auth = require("../auth/authenticate");

const Program = require("../models/program");

router.get("/", (req, res) => {
  Program.find({})
    .then((programlist) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(programlist);
    })
    .catch((err) => {
      console.log(err);
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.post("/add-Program", auth.verifyUser, auth.checkAdmin, (req, res) => {
  Program.create(req.body)
    .then((program) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(program);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.get(
  "/getprogram",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      const programe = await Program.find({});
      console.log(programe);
      res.json({ programlist: programe, msg: "hello" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.delete(
  "/deleteprogram/:id",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      const programe = await Program.findByIdAndDelete(req.params.id);
      res.json({ msg: "Program Deleted" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

router.patch(
  "/updateprogram/:id",
  auth.verifyUser,
  auth.checkAdmin,
  async (req, res, next) => {
    try {
      const programe = await Program.findByIdAndUpdate(req.params.id, req.body);
      res.json({ msg: "Program Updated" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  }
);

module.exports = router;
