// server/routes/homescreenItems.js
const express = require("express");
const HomescreenItem = require("../models/HomescreenItem");

const router = express.Router();

router.get("/", async (req, res) => {
  const items = await HomescreenItem.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  const newItem = new HomescreenItem(req.body);
  await newItem.save();
  res.json(newItem);
});

module.exports = router;
