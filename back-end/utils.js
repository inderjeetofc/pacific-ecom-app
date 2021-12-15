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
    process.env.JWT_SECRET_KEY||'secret_key_JWT_dev_env',
    { expiresIn: "2h" }
  );
};
module.exports = { generateToken };
