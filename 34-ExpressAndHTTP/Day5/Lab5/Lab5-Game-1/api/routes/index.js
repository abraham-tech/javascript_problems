const express = require("express");
const router = express.Router();
const gameControllers = require("../controllers/gameControllers");

router.route("/games").get(gameControllers.getAll).post(gameControllers.addOne);

router.route("/games/:id").get(gameControllers.getOne);

router.route("/games/:id").put(gameControllers.fullUpdateOne);

router.route("/games/:id").patch(gameControllers.partialUpdateOne);

router.route("/games/:id").delete(gameControllers.deleteOne);

module.exports = router;
