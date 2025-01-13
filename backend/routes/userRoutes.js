const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


// Register a new user
router.post("/register", userController.registerUser);

// Get all users
router.get("/allusers", userController.getAllUsers);

// Login a user
router.post("/login", userController.loginUser);

module.exports = router;
