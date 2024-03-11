const OrderHistory = require("../models/orderHistoryModel");

exports.get = async (_req, res) => {
  try {
    const data = await OrderHistory.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await OrderHistory.create(req.body);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
