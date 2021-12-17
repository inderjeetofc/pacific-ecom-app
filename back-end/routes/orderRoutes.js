const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const orderModel = require("../models/orderModel");
const { isAuth } = require("../utils");
const router = express.Router();

router.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status.send({ msg: "Cart is empty!" });
    } else {
      const orderDetails = new orderModel({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemTotal: req.body.itemTotal,
        shippingCharges: req.body.shippingCharges,
        tax: req.body.tax,
        orderTotal: req.body.orderTotal,
        deliveryDetails: req.body.deliveryDetails,
        user: req.user.id,
      });
      const createdOrder = await orderDetails.save();
      res.status(201).send({ msg: "New order Created", order: createdOrder });
    }
  })
);
module.exports = router;
