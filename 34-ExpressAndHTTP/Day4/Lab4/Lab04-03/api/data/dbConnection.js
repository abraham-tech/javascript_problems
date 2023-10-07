const MongoClient = require("mongodb").MongoClient;

let _connection = null;

const open = function () {
  if (get() === null) {
    MongoClient.connect(
      "mongodb://127.0.0.1:27017/meanGames",
      function (err, client) {
        if (err) {
          console.log("DB connection failed.");
          return;
        }
        console.log("DB connection open. ");
        _connection = client.db("meanGames");
      }
    );
  }
};

const get = function () {
  return _connection;
};

module.exports = {
  open,
  get,
};
