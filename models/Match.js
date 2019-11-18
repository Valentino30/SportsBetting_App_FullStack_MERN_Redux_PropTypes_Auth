const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  awayName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  group: {
    type: String,
    required: true
  },
  homeName: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  objectId: {
    type: String,
    required: true
  },
  sport: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

const Match = mongoose.model("Match", MatchSchema);

module.exports = Match;
