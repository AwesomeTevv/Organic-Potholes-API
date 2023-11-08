// Import the Mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Define a Mongoose Schema for the "Pothole" collection in MongoDB
const PotholeSchema = new mongoose.Schema({
  Longitude: { type: String, required: true },
  Latitude: { type: String, required: true },
});

// Create a Mongoose model based on the schema, named "Pothole"
const Pothole = mongoose.model("Pothole", PotholeSchema);

// Export the "Pothole" model to make it available for use in other parts of the application
module.exports = Pothole;
