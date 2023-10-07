const express = require("express");
const router = express.Router();
const gameControllers = require("../controllers/gameControllers");
const publisherController = require("../controllers/publisherControllers");

router.route("/games").get(gameControllers.getAll).post(gameControllers.addOne);

router.route("/games/:id").get(gameControllers.getOne);

router.route("/games/:id").put(gameControllers.fullUpdateOne);

router.route("/games/:id").patch(gameControllers.partialUpdateOne);

router.route("/games/:id").delete(gameControllers.deleteOne);

router
  .route("/games/:gameId/publisher")
  .get(publisherController.getOne)
  .post(publisherController.addOne);

module.exports = router;
