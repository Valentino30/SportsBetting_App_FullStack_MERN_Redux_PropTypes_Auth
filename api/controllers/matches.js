const Match = require("../../models/Match");

const getMatches = (req, res, next) => {
  Match.find()
    .then(matches => {
      res.json(matches);
    })
    .catch(err => next(err));
};

const getMatch = (req, res, next) => {
  const id = req.params.matchId;
  Match.findById(id)
    .then(match => {
      res.json(match);
    })
    .catch(err => next(err));
};

module.exports = { getMatches, getMatch };
