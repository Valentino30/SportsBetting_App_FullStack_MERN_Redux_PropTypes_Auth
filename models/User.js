const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bets: {
    type: [{ type: ObjectId, ref: "Bet" }]
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
