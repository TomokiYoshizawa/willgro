const express = require("express");
const app = express();
require("dotenv").config();

const authRouter = require("./routes/authRoute");

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("WillGro");
});

app.listen(8080, () => {
  console.log("Server is running on 8080");
});
