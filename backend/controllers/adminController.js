const { User } = require("../models/userModel");
const { Announcement } = require("../models/announcementModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const adminController = {
  getAllAdmins: async (req, res) => {
    try {
      const admins = await User.find({ role: "admin" });
      res.json(admins);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  getAdminById: async (req, res) => {
    const { adminId } = req.params;
    try {
      const admin = await User.find(adminId);

      if (!admin) {
        return res.status(404).json({ message: "Admin not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  createAdminUser: async (req, res) => {
    try {
      const adminData = req.body;
      const existingAdmin = await User.findOne({ emailAddress });

      if (existingAdmin) {
        return res
          .status(400)
          .json({ message: "Admin with this email already exists" });
      }

      const hashedPassword = await argon2.hash(adminData.password);

      const newAdmin = new User({
        ...adminData,
        password: hashedPassword,
        role: "admin",
      });

      await newAdmin.save();

      res.status(201).json(newAdmin);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  deleteAdminUser: async (req, res) => {
    try {
      const admin = await User.findOneAndDelete({
        emailAddress,
        role: "admin",
      });

      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

      await admin.save();
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  adminLogin: async (req, res) => {
    try {
      const { emailAddress, password } = req.body;

      const admin = await User.findOne({
        emailAddress,
        role: "admin",
      });

      if (!admin) {
        return res.status(404).json({ message: "User is not registered" });
      }

      const isPasswordValid = await argon2.verify(admin.password, password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password." });
      }

      const token = jwt.sign(
        { adminId: admin._id, role: admin.role },
        process.env.JWT_KEY,
        { expiresIn: "1h" },
      );

      res.status(200).json({ message: "Login successfully." }, token);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error. Please try again later.");
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await Announcement.find({ description });

      res.json(posts);
    } catch (error) {
      res
        .status(500)
        .send(
          { message: "Internal server error. Please try again later." },
          error,
        );
    }
  },

  getSpecificPost: async (req, res) => {
    try {
      const { announcementId } = req.params;

      const specificAnnouncementPost =
        await Announcement.findOne(announcementId);

      if (!specificAnnouncementPost) {
        return res.status(404).json({ message: "Post not found." });
      }

      //extract the fields to specificAnnouncementPost

      const { announcementTitle, announcementDescription, announcementAuthor } =
        specificAnnouncementPost;

      res.status(200).json({
        announcementTitle,
        announcementDescription,
        announcementAuthor,
      });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send("Internal server error. Please try again later.");
    }
  },

  postPublicFeed: async (req, res) => {
    try {
      const announcementData = req.body;

      const existingData = await Announcement.findOne({ announcementTitle });

      if (existingData) {
        return res.status(401).json({
          message: "Announcement with this title has already been posted.",
        });
      }

      const newFeed = new Announcement({
        ...announcementData,
        timeStamp: new Date(),
      });

      await newFeed.save();

      res
        .status(201)
        .json({ message: "Announcement has been posted.", newFeed });
    } catch (err) {
      console.error(err);
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

module.exports = adminController;
