const express = require("express");
const connection = require("./config/connection");
const multer = require("multer");
const userRouter = require("./routes/users");
const studentRouter = require("./routes/students");
const gacRouter = require("./routes/gac");
const adminRouter = require("./routes/admin");
const sessionsRouter = require("./routes/sessions");
const programsRouter = require("./routes/programs");
const synopsisRouter = require("./routes/synopsis");
const pdfReportsRouter = require("./routes/pdfReports");
const progressReportsRouter = require("./routes/progressReports");
const authRouter = require("./routes/auth");
const notification = require("./routes/notifications") 

var passport = require("passport");
const path = require("path");

const cors = require("cors");
const logger = require("morgan");

const app = express();
require("dotenv").config();
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connection(); //establishing database connection

//multer setup for uploading Files
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage }).single("synopsisDocument");

app.use("/upload", (req, res) => {
  upload(req, res, function (err) {
    console.log(req.body);
    console.log(req.files);
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.status(500).json(err);
    } else if (err) {
      console.log(err);

      return res.status(500).json(err);
    }

    return res.status(200).send(req.file);
  });
});

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/students", studentRouter);
app.use("/gac", gacRouter);
app.use("/sessions", sessionsRouter);
app.use("/programs", programsRouter);
app.use("/synopsis", synopsisRouter);
app.use("/pdfReports", pdfReportsRouter);
app.use("/progress-report", progressReportsRouter);
app.use("/Notification", notification);


app.get("/", async (req, res, next) => {
  console.log("Hello");
  res.json({ msg: "Hello from Server" });
});
//Server listening
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
