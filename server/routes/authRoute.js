const router = require("express").Router();
const User = require("../models/user");
const { body } = require("express-validator");
const validation = require("../handlers/validation");
const userController = require("../contollers/userController");
const tokenHandler = require("../handlers/tokenHendler");

router.post(
  "/register",
  body("email").trim().isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6"),
  body("confirmPassword")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6"),
  body("email").custom((value) => {
    return User.findOne({ email: value }).then((user) => {
      if (user) {
        return Promise.reject("E-mail already in use");
      }
    });
  }),
  validation.validate,
  userController.register
);

router.post(
  "/login",
  body("email").trim().isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6"),
  validation.validate,
  userController.login
);

// JWT token verification
router.post("/verify-token", (req, res) => {
  return res.status(200).json({ user: req.user });
});

module.exports = router;
