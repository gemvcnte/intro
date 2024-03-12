const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  announcementId: String,
  announcementDescription: String,
  announcementAuthor: String,
});

const Announcement = mongoose.model("announcements", announcementSchema);

module.exports = {
  Announcement,
};
