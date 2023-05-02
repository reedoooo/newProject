// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017/homescreenOrganizer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MangoDB connection established");
});
