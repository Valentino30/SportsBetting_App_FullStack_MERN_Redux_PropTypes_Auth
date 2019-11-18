const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const register = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user)
        return res.status(400).json({
          error: {
            message: "Already registered, please login"
          }
        });
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          const user = new User({
            email,
            password: hash
          });
          user.save().then(user => {
            jwt.sign(
              { id: user._id },
              config.get("jwtSecret"),
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user
                });
              }
            );
          });
        });
      });
    })
    .catch(err => next(err));
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user)
        return res.status(404).json({
          error: {
            message: "User not found, please register"
          }
        });

      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch)
          return res.status(400).json({
            error: {
              message: "Invalid password, please try again"
            }
          });

        if (isMatch) {
          jwt.sign(
            { id: user._id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user
              });
            }
          );
        }
      });
    })
    .catch(err => next(err));
};

const auth = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user))
    .catch(err => next(err));
};

module.exports = { register, login, auth };
