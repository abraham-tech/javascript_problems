const { ObjectId } = require("mongodb");
const dbConnection = require("../data/dbConnection");
require("dotenv").config();

const getRandomGameCount = (count) => {
  console.log("getRandomGameCount", process.env.MIN_GAMES_COUNT);
  if (count < process.env.MIN_GAMES_COUNT) {
    return parseInt(process.env.MIN_GAMES_COUNT);
  } else if (count > process.env.MAX_GAMES_COUNT) {
    return parseInt(process.env.MAX_GAMES_COUNT);
  } else {
    return count;
  }
};

const getAll = function (req, res) {
  let randomGameCount;
  if (req.query && req.query.randomGameCount) {
    let count = parseInt(req.query.randomGameCount, process.env.BASE_TEN);
    randomGameCount = getRandomGameCount(count);
    console.log("GET all games", count, randomGameCount);
  }

  let db = dbConnection.get();
  let gameCollection = db.collection("games");
  pipeline = [{ $sample: { size: randomGameCount } }];

  gameCollection.aggregate(pipeline).toArray(function (err, randomGames) {
    res.status(200).json(randomGames);
  });
};

const addOne = function (req, res) {
  console.log("POST new game");
  console.log(req.body);
  let db = dbConnection.get();
  let gamesCollection = db.collection("games");
  let newGame = req.body;
  console.log(req.body);
  if (req.body && req.body.title && req.body.price) {
    newGame.price = parseFloat(req.body.price);
    newGame.title = req.body.title;
    newGame.minPlayers = parseInt(req.body.minPlayers);
    newGame.maxPlayers = parseInt(req.body.maxPlayers);
    newGame.minAge = parseInt(req.body.minAge);
  } else {
    res.status(400).json({ message: "Messing price or rate" });
    return;
  }

  if (
    newGame.minPlayers < process.env.MINPLAYERS ||
    newGame.maxPlayers > process.env.MAXPLAYERS
  ) {
    res.status(400).json({ message: "Invalid Players " });
  }

  if (
    newGame.minAge < process.env.MIN_AGE ||
    newGame.minAge > process.env.MAX_AGE
  ) {
    res.status(400).json({ message: "Invalid Players age " });
  }

  gamesCollection.insertOne(newGame, function (err, acknowledgemnt) {
    if (err) {
      res.status(500).json({ message: "Internal server error" });
    }
    res.status(201).json(acknowledgemnt.ops);
  });
  res.status(200).json({ status: "success" });
};

const deleteOne = function (req, res) {
  let gameId = req.params.id;
  let db = dbConnection.get();
  let gameCollection = db.collection("games");
  gameCollection.deleteOne({ _id: ObjectId(gameId) }, function (err, game) {
    if (err) {
      res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json(game);
  });
};

module.exports = {
  getAll,
  addOne,
  deleteOne,
};
