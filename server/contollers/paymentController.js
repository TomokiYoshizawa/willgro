import Stripe from "stripe";
import { Request, response } from "express";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const CLIENT_URL = process.env.CLIENT_URL;

const createCheckoutSession = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.raw.message });
  }
};
