const express = require("express");
const { registerUser, loginUser,getUserProfile } = require("../controllers/authController");
const { validateRegister, validateLogin } = require("../middleware/validationMiddleware");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", validateLogin, loginUser);


router.get('/profile', protect, getUserProfile);
module.exports = router;
