const express = require("express");
const gamesControllers = require("../controllers/games.controllers");

const router = express.Router();

router.route("/games").get(gamesControllers.getAll);

router.route("/games/:id").get(gamesControllers.getOne);

router.route("/games/").post(gamesControllers.addOne);

module.exports = router;
