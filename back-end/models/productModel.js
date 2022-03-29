const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        rating: { type: Number, required: true },
        reviews: { type: Number, required: true },
        description: { type: String, required: true },
        inStock: { type: Number, required: true },
    },
    { timeStamps: true }
);

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
