const express = require("express");
const authController = require("../controllers/user");
const auth = require("../../middleware/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/auth", auth, authController.auth);

module.exports = router;
