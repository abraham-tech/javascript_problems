const dbConnection = require("../data/dbConnection");
require("dotenv").config();

const getRandomGameCount = (count) => {
  if (count < 3) {
    return 3;
  } else if (count > 7) {
    return 7;
  } else {
    return count;
  }
};

const getAll = function (req, res) {
  let randomGameCount;
  if (req.query && req.query.randomGameCount) {
    count = parseInt(req.query.randomGameCount, process.env.BASE_TEN);
    randomGameCount = getRandomGameCount(count);
  }

  let db = dbConnection.get();
  let gameCollection = db.collection("games");
  pipeline = [{ $sample: { size: randomGameCount } }];

  gameCollection.aggregate(pipeline).toArray(function (err, randomGames) {
    res.status(200).json(randomGames);
  });
};

module.exports = {
  getAll,
};
