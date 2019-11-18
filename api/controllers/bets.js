const Bet = require("../../models/Bet");
const User = require("../../models/User");

const postBet = (req, res, next) => {
  const { userId, matchId, bet } = req.body;

  const newBet = new Bet({
    userId,
    matchId,
    bet
  });

  newBet
    .save()
    .then(bet => {
      User.findById(userId).then(user => {
        user.bets.push(bet);
        user.save();
      });
      res.json(bet);
    })
    .catch(err => next(err));
};

const deleteBet = (req, res, next) => {
  const betId = req.params.betId;

  Bet.findById(betId)
    .then(bet => {
      User.findById(bet.userId)
        .then(user => {
          user.bets.remove(bet);
          user.save();
        })
        .then(() => {
          Bet.findByIdAndDelete(bet._id).then(deletedBet => {
            res.json(deletedBet._id);
          });
        });
    })
    .catch(err => next(err));
};

const getBets = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then(user => {
      Bet.find({ _id: { $in: user.bets } }).then(bets => {
        res.json(bets);
      });
    })
    .catch(err => next(err));
};

const getBet = (req, res, next) => {
  const matchId = req.params.matchId;
  Bet.findOne({ matchId })
    .then(bet => {
      if (!bet) return res.json({});
      res.json(bet);
    })
    .catch(err => next(err));
};

module.exports = { postBet, deleteBet, getBet, getBets };
