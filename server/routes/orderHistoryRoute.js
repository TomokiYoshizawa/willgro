const express = require("express");
const router = express.Router();
const orderHistoryController = require("../contollers/orderHistoryController");

router.get("/", orderHistoryController.get);

router.post("/", orderHistoryController.create);

module.exports = router;
