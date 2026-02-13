const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema(
  {
    food_name: {
      type: String,
      required: true,
      trim: true
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    location: {
      type: String,
      required: true
    },

    donor_name: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["available", "claimed", "collected"],
      default: "available"
    },

    claimed_by: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);
