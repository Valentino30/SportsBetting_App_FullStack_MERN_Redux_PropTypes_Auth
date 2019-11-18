const express = require("express");
const matchesController = require("../controllers/matches");

const router = express.Router();

router.get("/", matchesController.getMatches);
router.get("/:matchId", matchesController.getMatch);

module.exports = router;
