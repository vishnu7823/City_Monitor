const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const transporter = require("../config/nodemailer");

const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ fullName, email, password: hashedPassword });

    await user.save();

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    const verificationLink = `https://citymonitor.netlify.app/verify-email/${token}`;

    await transporter.sendMail({
      from: '"City Monitor" <your-email@gmail.com>',
      to: email,
      subject: "Verify Your Email",
      html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    });

    res.json({ message: "Registration successful! Please check your email for verification." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Email verification
exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, JWT_SECRET);
    
    const user = await User.findOneAndUpdate({ email: decoded.email }, { isVerified: true }, { new: true });
    if (!user) return res.status(400).json({ message: "User not found or already verified" });

    res.json({ message: "Email verification successful!" });
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (!user.isVerified) return res.status(400).json({ message: "Please verify your email first." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user: { fullName: user.fullName, email: user.email,isVerified: user.isVerified } });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

// Google Login
exports.googleLogin = async (req, res) => {
  const { fullName, email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ fullName, email, googleLogin: true });
      await user.save();
    }

    res.status(200).json({ message: "Google login successful", user: { fullName: user.fullName, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Error during Google login", error });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const resetLink = `https://citymonitor.netlify.app/reset-password/${resetToken}`;
    await transporter.sendMail({ to: email, subject: "Password Reset", text: `Reset password: ${resetLink}` });

    res.json({ message: "Reset email sent!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending reset email", error });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.json({ message: "Password updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error resetting password", error });
  }
};
