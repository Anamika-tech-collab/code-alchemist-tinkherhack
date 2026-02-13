const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log("MONGO_URI:", process.env.MONGO_URI ? "✅ Defined" : "❌ UNDEFINED");

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  family: 4 // Forces the use of IPv4
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

// Routes
const foodRoutes = require("./routes/foodRoutes.js");
app.use("/api/food", foodRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});



app.post("/add-food", async (req, res) => {
  try {

    // 1️⃣ Get data from frontend
    const { food_name, quantity, location, donor_name } = req.body;

    // 2️⃣ Basic validation
    if (!food_name || !quantity || !location || !donor_name) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // 3️⃣ Create new food object
    const newFood = new Food({
      food_name,
      quantity,
      location,
      donor_name
    });

    // 4️⃣ Save to MongoDB
    await newFood.save();

    // 5️⃣ Send success response
    res.status(201).json({
      message: "Food added successfully",
      data: newFood
    });

  } catch (error) {

    // If something fails
    res.status(500).json({
      message: error.message
    });

  }
});
