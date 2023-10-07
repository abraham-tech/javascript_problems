const gamesData = require("../data/games.json");

const getAll = function (req, res) {
  res.status(200).json({ gamesData });
};

module.exports = {
  getAll,
};
