const callbackify = require("util").callbackify;
require("dotenv").config();
const mongoose = require("mongoose");
const Game = require("../data/schemas/gamesModel");

const gameFindLimitSkipExecWithCallback = callbackify(function (offset, count) {
  return Game.find().skip(offset).limit(count).exec();
});

const GameFindOneWithCallback = callbackify(function (gameId) {
  return Game.findById(gameId).exec();
});

const DeleteGameByIdWithCallback = callbackify(function (gameId) {
  return Game.findByIdAndDelete(gameId).exec();
});

const GameInsertOneWithCallback = callbackify(function (newGame) {
  return Game.create(newGame);
});

const findByIdAndUpdateWithCallback = callbackify(function (newGame) {
  return Game.findByIdAndUpdate(newGame);
});

const getAll = function (req, res) {
  console.log("GET all games", Game);
  let offset = process.env.DEFAULT_OFFSET;
  let count = process.env.DEFAULT_COUNT;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, process.env.BASE_TEN);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, process.env.BASE_TEN);
  }
  gameFindLimitSkipExecWithCallback(offset, count, function (err, games) {
    console.log("Found games", games);
    if (err) {
      res
        .status(process.env.SERVER_ERROR_STATUS_CODE)
        .json({ message: process.env.INTERNAL_SERVER_ERROR });
    }
    res.status(process.env.OK_STATUS_CODE).json(games);
  });
};

const getOne = function (req, res) {
  const gameId = req.params.id;
  GameFindOneWithCallback(gameId, function (err, game) {
    console.log("Found game", game);
    if (err) {
      res
        .status(process.env.NOT_FOUND_STATUS_CODE)
        .json({ message: process.env.GAME_NOT_FOUND });
    }
    res.status(process.env.OK_STATUS_CODE).json(game);
  });
};

const addOne = function (req, res) {
  console.log("POST new game");
  console.log("Game AddOne request");
  const newGame = {
    title: req.body.title,
    year: req.body.year,
    rate: req.body.rate,
    price: req.body.price,
    minPlayers: req.body.minPlayers,
    maxPlayers: req.body.maxPlayers,
    minAge: req.body.minAge,
  };

  GameInsertOneWithCallback(newGame, function (err, game) {
    const response = { status: process.env.CREATED_STATUS_CODE, message: game };
    if (err) {
      console.log("Error creating game");
      res
        .status(process.env.SERVER_ERROR_STATUS_CODE)
        .json({ message: process.env.INTERNAL_SERVER_ERROR });
    }
    res.status(response.status).json(response.message);
  });
};

const fullUpdateOne = function (req, res) {
  console.log("PUT one game");
  const gameId = req.params.id;

  findByIdAndUpdateWithCallback(
    gameId,
    req.body,
    { new: true },
    (err, game) => {
      if (err) {
        res
          .status(process.env.SERVER_ERROR_STATUS_CODE)
          .json({ message: process.env.INTERNAL_SERVER_ERROR });
      } else if (!game) {
        res
          .status(process.env.NOT_FOUND_STATUS_CODE)
          .json({ message: process.env.GAME_NOT_FOUND });
      } else {
        const response = { status: process.env.OK_STATUS_CODE, message: game };
        res.status(response.status).json(response.message);
      }
    }
  );
};

const partialUpdateOne = function (req, res) {
  console.log("PATCH one game");
};

const deleteOne = function (req, res) {
  console.log("DELETE one game");
  const gameId = req.params.id;
  DeleteGameByIdWithCallback(gameId, function (err, game) {
    if (err) {
      res
        .status(process.env.NOT_FOUND_STATUS_CODE)
        .json({ message: process.env.GAME_NOT_FOUND });
    }
    res.status(process.env.OK_STATUS_CODE).json(game);
  });
};

module.exports = {
  getAll,
  addOne,
  deleteOne,
  getOne,
  fullUpdateOne,
  partialUpdateOne,
};
