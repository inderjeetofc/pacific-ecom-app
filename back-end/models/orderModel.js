const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
    {
        orderItems: [
            {
                cartData: {
                    name: { type: String, required: true },
                    image: { type: String, required: true },
                    price: { type: Number, required: true },
                    _id: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Product",
                        required: true,
                    },
                },
            },
            { qty: { type: Number, required: true } },
        ],
        shippingAddress: {
            fullName: { type: String, required: true },
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
        },
        paymentMethod: { type: String, required: true },
        itemTotal: { type: Number, required: true },
        shippingCharges: { type: Number, required: true },
        tax: { type: Number, required: true },
        orderTotal: { type: Number, required: true },
        deliveryDetails: {
            isPaid: { type: Boolean, default: false },
            paidAt: { type: Date },
            isDelivered: { type: Boolean, default: false },
            deliveredAt: { type: Date },
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timeStamps: true }
);
const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;
