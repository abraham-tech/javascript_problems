const express = require("express");
const router = express.Router();
const studentControllers = require("../controllers/studentControllers");

router
  .route("/students")
  .get(studentControllers.getAll)
  .post(studentControllers.addOne);

router
  .route("/students/:id")
  .get(studentControllers.getOne)
  .put(studentControllers.fullUpdateOne)
  .patch(studentControllers.partialUpdateOne)
  .delete(studentControllers.deleteOne);

module.exports = router;
