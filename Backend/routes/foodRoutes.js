const express = require("express");
const router = express.Router();
const food = require("../models/food");

/* ---------------------------
   ADD FOOD
----------------------------*/
router.post("/add", async (req, res) => {
  try {
    const { food_name, quantity, location, donor_name } = req.body;

    // Proper validation
    if (
      !food_name ||
      quantity === undefined ||
      quantity < 1 ||
      !location ||
      !donor_name
    ) {
      return res.status(400).json({
        message: "All fields are required and quantity must be at least 1"
      });
    }

    const newFood = new Food({
      food_name,
      quantity,
      location,
      donor_name
    });

    await newFood.save();

    res.status(201).json({
      message: "Food added successfully",
      data: newFood
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ---------------------------
   CLAIM FOOD
----------------------------*/
router.put("/claim/:id", async (req, res) => {
  try {
    const { volunteerName } = req.body;

    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    if (food.status !== "available") {
      return res.status(400).json({ message: "Food already claimed" });
    }

    food.status = "claimed";
    food.claimed_by = volunteerName;

    await food.save();

    res.json({
      message: "Food claimed successfully",
      data: food
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ---------------------------
   MARK AS COLLECTED
----------------------------*/
router.put("/collect/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    food.status = "collected";

    await food.save();

    res.json({
      message: "Food marked as collected",
      data: food
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ---------------------------
   DELETE FOOD (Optional)
----------------------------*/
router.delete("/:id", async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: "Food deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
