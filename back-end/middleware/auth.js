jwt = require("jsonwebtoken");
dotenv = require("dotenv").config();

module.exports = authorization = (req, res, next) => {
  const auth = req.headers["authorization"];
  const token = auth.split(" ")[1];
  if (token === null) {
    res.status(401).send("No access token");
  } else {
    jwt.verify(token, process.env.JWT_SECRET_SIGNING_KEY, (err) => {
      if (!err) {
        next();
      }
      if (err) {
        console.log(err);
        res.status(403).send(err);
      }
    });
  }
};
