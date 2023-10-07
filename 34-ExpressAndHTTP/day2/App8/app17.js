const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use("/static", express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  console.log("Get recived");
  //   res.send("Recived a get request. ");
  res.status(404).send("Index page not found. ");
  res.status(200).json();
});

app.get("/json", (req, res) => {
  console.log("Send Json");
  res.status(200).json({ Json: true });
});

app.get("/file", (req, res) => {
  console.log("Send File");
  res.status(200).sendFile(__dirname + "/public/page1.html");
});

const server = app.listen(process.env.PORT, () => {
  console.log("Listening at port ", server.address().port);
});
