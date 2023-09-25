const mongoose = require("mongoose");

const PotholeSchema = new mongoose.Schema({
  Coordinates: {
    Longitude: { type: String, required: true },
    Latitude: { type: String, required: true },
  },
});

const Pothole = mongoose.model("Pothole", PotholeSchema);

module.exports = Pothole;