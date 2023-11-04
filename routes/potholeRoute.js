const express = require("express");
const Pothole = require("../models/potholes");

const router = express.Router();

// Post Method
// Creates a single Pothole and adds it to the database
router.post("/addPothole", async (req, res) => {
  const data = new Pothole({
    Longitude: req.body.Longitude,
    Latitude: req.body.Latitude,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Adds many Potholes and adds it to the database
router.post("/addManyPotholes", async (req, res) => {
  try {
    const data = await Pothole.insertMany(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Method
// Fetches a list of all the Potholes on the database
router.get("/getAllPotholes", async (req, res) => {
  try {
    const data = await Pothole.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Pothole by ID Method
router.delete("/deletePothole", async (req, res) => {
  try {
    const data = await Pothole.findOneAndDelete({
      Latitude: req.body.Latitude,
      Longitude: req.body.Longitude,
    });

    if (!data) {
      res.send(`No potholes found at that location`);
    } else {
      res.send(`Deleted pothole.`);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
