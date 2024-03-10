const { CRYPT_SECRET_KEY, TOKEN_SECRET_KEY } = process.env;
const JWT = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const User = require("../models/userModel");

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

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //find a user from db
    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(401).json({
        errors: {
          param: "email",
          msg: "email not found",
        },
      });
    //confirm if the password is correct
    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      CRYPT_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (decryptedPassword !== password)
      return res.status(401).json({
        errors: {
          param: "password",
          msg: "password is incorrect",
        },
      });

    //Issue JWT
    const token = JWT.sign({ id: user._id }, TOKEN_SECRET_KEY, {
      expiresIn: "24h",
    });

    return res.status(201).json({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
