const express = require("express");
const router = express.Router();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripeTestAccount = process.env.STRIPE_TEST_ACCOUNT;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

const YOUR_DOMAIN = process.env.YOUR_DOMAIN || `http://localhost:8080`;

router.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items.map((item) => ({
      price_data: {
        currency: "cad",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/product`,
  });

  res.json({ url: session.url });
});

module.exports = router;
