const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const productModel = require("../models/productModel");
const data = require("../data");
const router = express.Router();
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const allProducts = await productModel.find();
    res.status(200).send(allProducts);
  })
);
router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProduct = await productModel.insertMany(data.products);
    res.status(200).send({ createdProduct });
  })
);
router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    let product = await productModel.findById({_id:productId});
    if (product) {
      res.status(200).send(product);
    } else res.status(404).send({ message: "Product not found" });
  })
);
module.exports = router;
