const express = require("express");
const router = express.Router();
const gameControllers = require("../controllers/gameControllers");

router.route("/games").get(gameControllers.getAll);

module.exports = router;
