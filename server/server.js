const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const authRouter = require("./routes/authRoute");
const paymentRouter = require("./routes/payment");

const { PORT, MONGO_URI } = process.env;

//MongoDB connection
const mongoose = require("mongoose");
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connected to Mongo database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/auth", authRouter);
app.use("/payment", paymentRouter);

app.get("/", (req, res) => {
  res.send("WillGro");
});

app.listen(8080, () => {
  console.log("Server is running on 8080");
});
