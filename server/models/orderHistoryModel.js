const mongoose = require("mongoose");

const orderHistorySchema = new mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  phone_number: { type: Number, required: true },
  address: { type: String, required: true },
  product_price: { type: Number, required: true },
  total_price: { type: Number, required: true },
});

const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);

module.exports = OrderHistory;
