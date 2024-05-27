const express = require("express");
const router = express.Router();

const {
  login,
  sendOTP,
  signUp,
  changePassword,
} = require("../controllers/Auth");
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

const { auth } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signUp", signUp);
router.post("/sendOTP", sendOTP);
router.post("/changePassword", auth, changePassword);
router.post("/reset-password-token", resetPasswordToken);

router.post("/reset-password", resetPassword);

module.exports = router;
