const gamesData = require("../data/games.json");
const dbConnection = require("../data/dbConnection");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Game = mongoose.model("Game");
const callbackify = require("util").callbackify;

const gameFindExecWithCallback = callbackify(function () {
  return Game.find().exec();
});

// const genericWithCallback = callbackify(function (newFunctionName){
//   return newFunctionName();
// });

const gameFindLimitSkipExecWithCallback = callbackify(function (offset, count) {
  return Game.find().skip(offset).limit(count).exec();
});

// check it without using an ObjectId
const GameFindOneWithCallback = callbackify(function (gameId) {
  return Game.findOne({ _id: ObjectId(gameId) }).exec();
});
const GameFindByIdWithCallback = callbackify(function (gameId) {
  return Game.findById(ObjectId(gameId)).exec();
});

const GameInsertOneWithCallback = callbackify(function (newGame) {
  return Game.create(newGame).exec();
});

// http://localhost:3000/api/games?count=3&offset=5
const getAll = function (req, res) {
  let offset = 0;
  let count = 5;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  // console.log("offset: ", offset, "offset + count: ", offset + count);
  // const pageGames = gamesData.slice(offset, offset + count);

  // let db = dbConnection.get();
  // let gamesCollection = db.collection("games");
  const docs = mongooseGracefulShutdown.find().exec(function (err, games) {
    console.log("Found games", games);
    res.status(200).json({ games });
  });
  // let db.collection("games").find().toArray(function (err, docs) {
  //   console.log("Found games", docs);
  // });
  gameFindLimitSkipExecWithCallback(offset, count, function (err, games) {
    console.log("Found games", games);
    res.status(200).json({ games });
  });
};

const getOne = function (req, res) {
  const gameId = req.params.id;
  let db = dbConnection.get();
  let gamesCollection = db.collection("games");
  // const docs = gamesCollection.findOne(
  //   { _id: ObjectId(gameId) },
  //   function (err, game) {
  //     // handle error
  //     console.log("Found game", game);
  //     res.status(200).json({ game });
  //   }
  // );
  GameFindOneWithCallback(gameId, function (err, game) {
    console.log("Found game", game);
    res.status(200).json({ game });
  });

  // res.status(200).json(gamesData[gameId]);
};

const addOne = function (req, res) {
  console.log("POST new game");
  console.log(req.body);
  let db = dbConnection.get();
  let gamesCollection = db.collection("games");
  let newGame = req.body;
  if (req.body && req.body.title && req.body.price) {
    newGame.price = parseFloat(req.body.price);
    newGame.rate = parseInt(req.body.rate);
    // newGame.minPlayers = parseInt(req.body.minPlayers);
    // newGame.minPlayers = parseInt(req.body.maxPlayers);
  } else {
    res.status(400).json({ message: "Messing price or rate" });
  }

  // Don't use response here, make sure you have a resonable name for the variable
  gamesCollection.insertOne(newGame, function (err, acknowledgemnt) {
    if (err) {
      res.status(500).json({ message: "Internal server error" });
    }
    res.status(201).json(acknowledgemnt.ops);
  });
  res.status(200).json({ status: "success" });
  // res.status(200).json(req.body);
};

module.exports = {
  getAll,
  getOne,
  addOne,
};
