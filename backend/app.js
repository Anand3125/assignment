const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const userRoutes = require("./routes/userRoutes"); // Import user routes
const formRoutes = require("./routes/formRoutes"); // Existing form routes
const app = express();


// Middleware
app.use(express.json());
app.use(cors());

// Suppress Mongoose strictQuery warning
mongoose.set('strictQuery', true);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Route linking
app.use("/api/users", userRoutes); // Link user routes
app.use("/api/forms", formRoutes);

// Default route for testing
app.get("/", (req, res) => {
    res.send("Hello, backend is working!");
  });
  
  // Start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


