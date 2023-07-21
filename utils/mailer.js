const nodemailer = require("nodemailer");
require("dotenv").config({ path: __dirname + "/./../.env" });
const { MAILER_USER, MAILER_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: MAILER_USER,
    pass: MAILER_PASS,
  },
});

module.exports.transporter = transporter;

transporter.verify().then(() => {
  console.log("Ready to send emails");
});
