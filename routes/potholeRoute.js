// Import the Express framework and the "Pothole" model from the specified location
const express = require("express");
const Pothole = require("../models/potholes");

// Create an Express Router instance to define API routes
const router = express.Router();

// POST Method: Create and save a single Pothole to the database
router.post("/addPothole", async (req, res) => {
  // Create a new Pothole instance with data from the request body
  const data = new Pothole({
    Longitude: req.body.Longitude,
    Latitude: req.body.Latitude,
  });

  try {
    // Save the Pothole data to the database and respond with the saved data
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(400).json({ message: error.message });
  }
});

// POST Method: Add multiple Potholes to the database
router.post("/addManyPotholes", async (req, res) => {
  try {
    // Insert multiple Potholes from the request body into the database
    const data = await Pothole.insertMany(req.body);
    res.status(200).json(data);
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(400).json({ message: error.message });
  }
});

// GET Method: Fetch a list of all Potholes from the database
router.get("/getAllPotholes", async (req, res) => {
  try {
    // Retrieve all Potholes from the database and respond with the data
    const data = await Pothole.find();
    res.json(data);
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ message: error.message });
  }
});

// DELETE Method: Delete a Pothole by its ID
router.delete("/deletePothole/:id", async (req, res) => {
  try {
    // Find and delete a Pothole by its ID and respond with a success message
    const data = await Pothole.findByIdAndDelete(req.params.id);
    if (data) {
      res.send(`Deleted pothole with id: ${req.params.id}`);
    } else {
      res.send(`No pothole with the id: ${req.params.id}`);
    }
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(400).json({ message: error.message });
  }
});

// Export the router to make these API routes available for use in the application
module.exports = router;
