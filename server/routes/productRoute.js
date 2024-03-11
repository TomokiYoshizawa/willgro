const express = require("express");
const router = express.Router();

const productData = require("../db/productData");

//get all products
router.get("/", (req, res) => {
  res.json(productData);
});

//get single product
router.get("/:id", (req, res) => {
  const id = req.params.id;

  const product = productData.find((product) => product.id === id);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
});

module.exports = router;
