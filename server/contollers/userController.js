const { CRYPT_SECRET_KEY, TOKEN_SECRET_KEY } = process.env;
const JWT = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const User = require("../models/user");

exports.register = async (req, res) => {
  const password = req.body.password;
  try {
    //crypt the password
    req.body.password = CryptoJS.AES.encrypt(
      password,
      CRYPT_SECRET_KEY
    ).toString();

    //create new user
    const user = await User.create(req.body);

    //Issue JWT
    const token = JWT.sign({ id: user._id }, TOKEN_SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
