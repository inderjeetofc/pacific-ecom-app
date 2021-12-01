const { getEventListeners } = require("events");
const express = require("express");
// import express from 'express'
const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 4000;
// import data from './data.js'

const data = require("./data");
app.get("/", (req, res) => [res.send("this is the server")]);

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  let product = data.products.find((product) => product.id === productId);
  if (product) {
    res.status(200).send(product);
  } else res.status(404).send({ message: "product not found" });
});

server.listen(port, () => {
  console.log(`React app is listening at port ${port}`);
});
