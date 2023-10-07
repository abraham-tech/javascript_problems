const MongoClient = require("mongodb").MongoClient;

const callbackify = require("util").callbackify;

let _connection = null;

const MongoClientConnectWithCallback = callbackify(function (url) {
  return MongoClient.connect(url, callback);
});

const open = function () {
  console.log("open function called");
  if (null === get()) {
    //     MongoClientConnectWithCallback("mongodb://127.0.0.1:27017/meanGames",
    //     function (err, client) {
    //       if (err) {
    //         console.log("DB connection failed");
    //         return;
    //       }
    //       console.log("DB connection open");
    //       _connection = client.db("meanGames");
    //     }
    //   );
    MongoClient.connect(
      "mongodb://127.0.0.1:27017/meanGames",
      function (err, client) {
        if (err) {
          console.log("DB connection failed");
          return;
        }
        console.log("DB connection open");
        _connection = client.db("meanGames");
      }
    );
  }
};

const get = function () {
  return _connection;
};

module.exports = { open, get };
