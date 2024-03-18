const express = require("express");
const router = express.Router();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripeTestAccount = process.env.STRIPE_TEST_ACCOUNT;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

const YOUR_DOMAIN = "http://localhost:5173";

router.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
  const { items } = req.body; // クライアントから送られてきた商品情報
  console.log(items);
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
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.json({ url: session.url });
});

//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: "price_1ODyHBAaSk1zULZarEDkdHGf",
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//     // automatic_tax: { enabled: true },
//   });

//   res.redirect(303, session.url);
// });

module.exports = router;
