const mongoose = require("mongoose");

const orderHistorySchema = new mongoose.Schema({
  date: { type: String, required: true },
  user_id: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
});

const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);

module.exports = OrderHistory;
