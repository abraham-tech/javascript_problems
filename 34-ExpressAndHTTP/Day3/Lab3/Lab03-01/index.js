const express = require("express");
const router = require("./api/routes");
require("dotenv").config();

const app = express();

app.use("/api", router);

app.use("/", function (req, res, next) {
  console.log("404 path not implemented: " + req.url);
  next();
});

const server = app.listen(process.env.PORT, () => {
  console.log("Listening at port ", server.address().port);
});
