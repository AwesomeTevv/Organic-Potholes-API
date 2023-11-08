// Import necessary libraries and modules
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config(); // Load environment variables from a .ENV file

const app = express(); // Setting up an Express app
// const PORT = process.env.PORT || 3000;

// Define the MongoDB connection string from environment variables
const mongoString = process.env.DATABASE_URL; // MongoDB Connection String

// Setting up MongoDB Database connection with Mongoose
mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Start the Express app and listen on port 3000 upon successful database connection
    app.listen(3000, () => {
      console.log(`Server started at ${3000}`);
    });
  });

// Setting up the Express app with necessary headers for handling HTTP requests
app.use(express.json()); // Enable JSON request body parsing
app.use((req, res, next) => {
  // Set CORS (Cross-Origin Resource Sharing) headers to allow cross-origin requests
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next(); // Move to the next middleware
});

// Handle MongoDB connection events
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected"); // Output a message when the database connection is successful
});

// Define and use the routes for the Organic Potholes API

// ROUTES
const potholeRoute = require("./routes/potholeRoute");
app.use("/api/pothole", potholeRoute);
