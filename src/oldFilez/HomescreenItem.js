// The HomeScreenItem Model
const mongoose = require("mongoose");

const HomescreenItemSchema = new mongoose.Schema({
  name: String,
  content: String,
  style: {
    border: String,
    backgroundColor: String,
  },
  link: String,
});

module.exports = mongoose.model("HomescreenItem", HomescreenItemSchema);
