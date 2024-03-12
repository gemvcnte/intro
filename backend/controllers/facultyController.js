const { User } = require("../models/userModel");
const { Announcement } = require("../models/announcementModel");
const argon2 = require("argon2");
const dotenv = require("dotenv");
dotenv.config();

const facultyController = {
  getAllPosts: async (req, res) => {
    try {
      const announcements = await Announcement.find();
    } catch (error) {
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  createFacultyUser: async (req, res) => {
    try {
      const facultyDetails = req.body;

      const existingFaculty = await User.findOne({
        emailAddress,
        role: "faculty",
      });

      if (existingFaculty) {
        return res.status(404).json({ message: "User already exists" });
      }

      const hashedPassword = await argon2.hash(
        facultyDetails.password,
        password,
      );

      const newFaculty = new User({
        ...facultyDetails,
        password: hashedPassword,
        role: "faculty",
      });

      await newFaculty.save();

      res.status(201).json({ message: "Faculty created.", newFaculty });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  facultyLogin: async (req, res) => {
    try {
      const { emailAddress, password } = req.body;

      const faculty = await User.findOne({ emailAddress, role: "faculty" });

      if (!faculty) {
        return res.statusS(404).json({ message: "User not found." });
      }

      const isPasswordValid = await argon2.verify(faculty.password, password);

      if (isPasswordValid) {
        return res.status(401).json({ message: "Invalid password." });
      }

      const token = jwt.sign(
        {
          facultyId: faculty._id,
          role: faculty.role,
        },
        process.env.FACULTY_JWT_KEY,
        { expiresIn: "1h" },
      );

      res.status(200).json({ message: "Login successfully.", token });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  postClassFeed: async (req, res) => {
    try {
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },
};

module.exports = facultyController;
