const mongoose = require("mongoose");

// the schema is a json object that defines the structure of the document
// this schema applies a constraint to the document
const gameSchema = mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  rate: { type: Number, min: 1, max: 5, default: 1 },
  price: Number,
  minPlayers: { type: Number, min: 1, max: 10 },
  maxPlayers: Number,
  minAge: Number,
  disigner: [String],
});

// this make the schema available to the application
// this is called the compiling the schema
// Where is the collection name?
// Both will work (model name, schema, collection name)
// mongoose.model("Game", gameSchema");
mongoose.model("Game", gameSchema, "games");
