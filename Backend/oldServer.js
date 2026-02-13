// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log("MongoDB Error:", err));

// // Routes
// const foodRoutes = require("./routes/foodRoutes");
// app.use("/api/food", foodRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend running");
// });

// // Start server
// app.listen(process.env.PORT || 5000, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });
