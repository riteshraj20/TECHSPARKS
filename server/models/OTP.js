const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), expires: 10 * 60 },
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
  try {
    console.log(email);
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      emailTemplate(otp)
    );
    console.log(mailResponse);
    console.log("mail response");
    console.log("Email sent successfully: ", mailResponse.response);
  } catch (error) {
    console.error("Error occurred while sending email: ", error);
    throw error;
  }
}

// Define a post-save hook to send email after the document has been saved
OTPSchema.post("save", async function (doc, next) {
  console.log("New document saved to database");

  // Send an email after the document is created
  if (true) {
    try {
      await sendVerificationEmail(doc.email, doc.otp);
      console.log("Verification email sent");
    } catch (error) {
      console.error("Error occurred in post-save hook: ", error);
      // Optionally, handle what should happen if email sending fails after save
    }
  }
  next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
