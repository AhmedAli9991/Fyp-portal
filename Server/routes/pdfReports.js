//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
// Read HTML Template

router.post("/generate-report", (req, res, next) => {
  console.log(req.body);
  var html = fs.readFileSync(
    path.join(__dirname, "../pdfTemplates/synopsisReport.html"),
    "utf8"
  );
  const bitmap = fs.readFileSync(
    path.join(__dirname, "../pdfTemplates/cui.png")
  );
  const logo = bitmap.toString("base64");

  var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
  };

  var document = {
    html: html,
    data: {
      logo: logo,
      evaluations: req.body.evaluations,
      synopsis: req.body.synopsis,
    },
    path: `../Server/public/pdfReports/${req.body.synopsis[0].student_id.registrationNo}.pdf`,
  };

  pdf
    .create(document, options)
    .then((response) => {
      console.log(response);
      res.status(200).json({ message: "Generated" });
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get("/generate-report/:registrationNo", (req, res) => {
  console.log("registraitionNO", req.params.registrationNo);

  const file = path.join(
    __dirname,
    `../public/pdfReports/${req.params.registrationNo}.pdf`
  );
  res.download(file);
});

module.exports = router;
