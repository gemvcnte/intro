const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/adminLogin", adminController.adminLogin);
router.post("/create-admin", adminController.createAdminUser);
router.get("/posts", adminController.getAllPosts);
router.post("/:id", adminController.deleteAdminUser);

module.exports = router;
