const JWT = require("jsonwebtoken");
const { TOKEN_SECRET_KEY } = process.env;
const User = require("../models/userModel");

//check if token is valid from the client
const tokenDecode = (req) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ")[1];
    try {
      const decodedToken = JWT.verify(bearer, TOKEN_SECRET_KEY);
      return decodedToken;
    } catch (err) {
      console.log(err);
      return false;
    }
  } else {
    return false;
  }
};

// middleware to verify token
exports.verifyToken = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);
  if (tokenDecoded) {
    const user = await User.findById(tokenDecoded.id);
    if (!user) {
      return res.status(401).json("user not found");
    }
    req.user = user;
    next();
  } else {
    return res.status(401).json("token is invalid");
  }
};
