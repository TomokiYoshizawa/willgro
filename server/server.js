const express = require("express");
const cors = require("cors");
// const corsOptions = {
//   origin: "https://willgro.netlify.app",
//   optionsSuccessStatus: 200,
// };
const app = express();
const path = require("path");
require("dotenv").config();

const authRouter = require("./routes/authRoute");
const paymentRouter = require("./routes/payment");
const productRouter = require("./routes/productRoute");
const orderHistoryRouter = require("./routes/orderHistoryRoute");

const { PORT, MONGO_URI } = process.env;

//MongoDB connection
const mongoose = require("mongoose");
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connected to Mongo database"))
  .catch((err) => console.log(err));

app.use(express.json());
// app.use(express.static("public"));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(cors());
// app.use(cors(corsOptions));

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/payment", paymentRouter);
app.use("/orderhistory", orderHistoryRouter);

app.get("/", (req, res) => {
  res.send("WillGro");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
