const express = require("express");
const path = require("path");
const router = require("./api/routes");
require("dotenv").config();
// require("./api/data/dbConnection").open();
require("./api/data/db");

const app = express();

// why do we need the first parameter as css here?
app.use("/css", function (req, res, next) {
  console.log("Request IP: " + req.url);
  next();
});

app.use(express.static(path.join(__dirname, "/public")));

// app.use("/json", function (req, res, next) {
//   console.log("will this be executed: " + req.url);
//   next();
// });

// now it enables body parser for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.use("/", function (req, res, next) {
  console.log("404 path not implemented: " + req.url);
  next();
});

const server = app.listen(process.env.PORT, () => {
  console.log("Listening at port ", server.address().port);
});
