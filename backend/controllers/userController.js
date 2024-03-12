const { Announcement } = require("../models/announcementModel");
const { User } = require("../models/userModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const userController = {
  userRegister: async (res, res) => {
    try {
      const userData = req.body;

      const isRegistered = await User.findOne({
        emailAddress: userData.emailAddress,
      });

      if (isRegistered) {
        return res.status(400).json({ message: "User is already registered" });
      }

      const hashedPassword = await argon2.hash(userData.password);

      const newUser = new User({
        ...userData,
        password: hashedPassword,
        role: "user",
      });

      await newUser.save();

      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  userLogin: async (req, res) => {
    try {
      const { emailAddress, password } = req.body;

      const user = await User.findOne({ emailAddress, role: "user" });

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const isPasswordValid = await argon2.verify(user.password, password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password." });
      }

      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_KEY,
        { expiresIn: "1h" },
      );

      res.status(200).json({ message: "Login successfully.", token });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const announcements = await Announcement.find();

      if (!announcements) {
        return res
          .status(404)
          .json({ message: "There are no announcements for now" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },
};

module.exports = userController;
