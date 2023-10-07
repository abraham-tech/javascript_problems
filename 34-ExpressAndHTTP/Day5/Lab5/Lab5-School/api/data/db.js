const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/SchoolDB";
const callbackify = require("util").callbackify;
require("./schemas/studentsModel");

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + "Student");
});

mongoose.connection.on("error", function (error) {
  console.log("Mongoose connection error: " + error);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

const mongooseGracefulShutdown = callbackify(mongoose.disconnect);

process.on("SIGINT", function () {
  mongooseGracefulShutdown(function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Mongoose disconnected by app termination");
    process.exit(0);
  });
});
