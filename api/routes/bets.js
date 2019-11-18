const express = require("express");
const betsController = require("../controllers/bets");

const router = express.Router();

router.post("/", betsController.postBet);
router.get("/:userId", betsController.getBets);
router.get("/bet/:matchId", betsController.getBet);
router.delete("/:betId", betsController.deleteBet);

module.exports = router;
