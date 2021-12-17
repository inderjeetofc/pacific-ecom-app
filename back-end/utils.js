const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateToken = async function (req, res, userData) {
  return jwt.sign(
    {
      id: userData._id,
      name: userData.name,
      email: userData.email,
      isAdmin: userData.isAdmin,
    },
    process.env.JWT_SECRET_KEY || "secret_key_JWT_dev_env",
    { expiresIn: "2h" }
  );
};
// module.exports = { generateToken };

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.split(" ")[1];
    jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "secret_key_JWT_dev_env",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "invalid token" });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else res.status(401).send({ msg: "No token !" });
};
module.exports = { generateToken,isAuth };
