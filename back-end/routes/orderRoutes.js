const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const orderModel = require("../models/orderModel");
const {isAuth} = require("../utils");
const router = express.Router();

router.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems === null) {
      res.status.send({ msg: "Cart is empty!" });
    } else {
      const orderDetails = new orderModel({
        orderItems: req.body.orderItems,
        oshippingDetails: req.body.shippingDetails,
        paymentDetails: req.body.paymentDetails,
        deliveryDetails: req.body.deliveryDetails,
        userDetails: req.body.userDetails,
      });
    }
    await orderDetails.save();
    res.status(201).send({ msg: "New order Created", order: orderDetails });
  })
);
module.exports = router;
