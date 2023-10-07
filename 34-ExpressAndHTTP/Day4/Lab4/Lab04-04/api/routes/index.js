const express = require("express");
const router = express.Router();
const gameControllers = require("../controllers/gameControllers");

router.route("/games").get(gameControllers.getAll);

router.route("/games").post(gameControllers.addOne);

router.route("/games/:id").delete(gameControllers.deleteOne);

module.exports = router;
