const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({
      error: {
        message: "Unauthorized: Missing token"
      }
    });
  try {
    req.user = jwt.verify(token, config.get("jwtSecret"));
    next();
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Unauthorized: Invalid token"
      }
    });
  }
};

module.exports = auth;
