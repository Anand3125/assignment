const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

// Register new user
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: "Failed to register user", details: err.message });
  }
};
// all users
const getAllUsers = async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();

    // Return the list of users
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve users", details: err.message });
  }
};


// Login user
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Failed to login", details: err.message });
  }
};

module.exports = { registerUser, loginUser  ,getAllUsers, };
