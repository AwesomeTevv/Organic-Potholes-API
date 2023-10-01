const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express(); // Setting up an Express app
// const PORT = process.env.PORT || 3000;

const mongoString = process.env.DATABASE_URL; // MongoDB Connection String

/**
 * Setting up MongoDB Database connection
 */
mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server started at ${3000}`);
    });
  });

/**
 * Setting up the Express app with the necessary
 * headers
 */
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

/**
 * Will print 'connected' if connection is successful
 */
database.once("connected", () => {
  console.log("Database Connected");
});

// ROUTES
const potholeRoute = require("./routes/potholeRoute");
app.use("/api/pothole", potholeRoute);
