const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuseeqtoor9@gmail.com",
    // pass: "",
  },
});

module.exports = signupMail = (email) => {
  var mailOptions = {
    from: "tuseeqtoor9@gmail.com",
    to: email,
    subject: "Signup Successful",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
