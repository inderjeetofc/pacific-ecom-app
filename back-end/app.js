const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const app = express();
require("../back-end/db/conn"); // connection to db
// const data = require("./data");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//middlewares
//error handler express async handler

//routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => [res.send("this is the server")]);
//paypal service for payment gateway
app.get("/api/config/paypal", (req, res) => [res.send(process.env.PAYPAL_CLIENT_ID || 'sd')]);
app.use((err, req, res, next) => {
    res.status(500).send({
        message: err.message,
    });
});

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

module.exports = app;
