const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  matchId: {
    type: Schema.Types.ObjectId,
    ref: "Match"
  },
  bet: {
    type: String,
    required: true
  }
});

const Bet = mongoose.model("Bet", BetSchema);

module.exports = Bet;
