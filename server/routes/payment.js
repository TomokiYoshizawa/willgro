const express = require("express");
const router = express.Router();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripeTestAccount = process.env.STRIPE_TEST_ACCOUNT;

const YOUR_DOMAIN = "http://localhost:5173";

router.post("/checkout/create-checkout-session", async (req, res) => {
  //receiving the product price and quantity from client
  const { productPrice, productQuantity } = req.body;

  const session = await STRIPE_SECRET_KEY.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

module.exports = router;
