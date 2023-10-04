const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/index", (req, res) => {
  console.log("Send File");
  res.status(200).sendFile(__dirname + "/public/index.html");
});

app.get("/page1", (req, res) => {
  console.log("Send File");
  res.status(200).sendFile(__dirname + "/public/page1.html");
});

app.get("/page2", (req, res) => {
  console.log("Send File");
  res.status(200).sendFile(__dirname + "/public/page2.html");
});

app.post("/", (req, res) => {
  console.log("Send Json");
  res.status(200).json({ message: "Json object" });
});

const server = app.listen(process.env.PORT, () => {
  console.log("Listening at port ", server.address().port);
});
