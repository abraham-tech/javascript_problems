const mongoose = require("mongoose");
require("dotenv").config();
// const publisherSchema = require("./publisherModel");

const publisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  country: String,
  established: Number,
});

const gameSchema = mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  rate: {
    type: Number,
    min: process.env.MIN_RATE,
    max: process.env.MAX_RATE,
    default: process.env.DEFAULT_RATE,
  },
  price: Number,
  minPlayers: {
    type: Number,
    min: process.env.MIN_PLAYERS,
    max: process.env.MAX_PLAYERS,
  },
  maxPlayers: {
    type: Number,
    min: process.env.MIN_PLAYERS,
    max: process.env.MAX_PLAYERS,
  },
  minAge: Number,
  disigner: [String],
  publisher: publisherSchema,
});
mongoose.model(process.env.GAME, gameSchema);
module.exports = mongoose.model(process.env.GAME, gameSchema);
