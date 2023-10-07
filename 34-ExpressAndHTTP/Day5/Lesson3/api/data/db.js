const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/meanGames";
const callbackify = require("util").callbackify;
require("./gamesModel");

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Observer desing pattern - events
// Observer subscribes to an event and gets notified when the event occurs
// Event name should not be env variable
// This module dose not have to be exported it work as soon as it is required

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + "MeanGames");
});

mongoose.connection.on("error", function (error) {
  console.log("Mongoose connection error: " + error);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

// check this one how it works
mongoose.connection.on("close", function () {
  console.log("Mongoose connected to " + "MeanGames");
});

const mongooseGracefulShutdown = callbackify(mongoose.disconnect);
// This is an override of the action that happens when the app is terminated
// This will log a message and then close the connection then finally exit the app.

// process.on("SIGINT", function () {
//   console.log(" SIGINT Mongoose disconnected by app termination");
//   mongoose.connection.close();
//   process.exit(0);
// });

process.on("SIGINT", function () {
  console.log(" SIGINT Mongoose disconnected by app termination");
  mongooseGracefulShutdown(function (err) {
    console.log("Mongoose disconnected by app termination");
    process.exit(0);
  });
  //   mongoose.connection.close();
});

process.on("SIGUSR2", function () {
  console.log(" SIGINT2 Mongoose disconnected by app termination");
  mongooseGracefulShutdown(function (err) {
    console.log("Mongoose disconnected by app termination");
    process.kill(process.pid, "SIGUSR2");
    // process.exit(0);
  });
  //   mongoose.connection.close();
});
