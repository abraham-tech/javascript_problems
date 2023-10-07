const mongoose = require("mongoose");
require("dotenv").config();

const publisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  country: String,
  established: Number,
});

mongoose.model("Publisher", publisherSchema);
module.exports = mongoose.model("Publisher", publisherSchema);
