const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const user = require("./api/routes/user");
const bets = require("./api/routes/bets");
const matches = require("./api/routes/matches");

const port = process.env.PORT || 4000;
const db = config.get("MongoURI");

const app = express();

app.use(express.json());

app.use("/api/user", user);
app.use("/api/bets", bets);
app.use("/api/matches", matches);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("MongoDB connected...");
  })
  .then(() => {
    app.listen(port, console.log("Server listening on port " + port));
  })
  .catch(err => console.log(err));
