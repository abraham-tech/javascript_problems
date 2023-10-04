const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const server = app.listen(process.env.PORT, () => {
  console.log("Listening at port ", server.address().port);
});
