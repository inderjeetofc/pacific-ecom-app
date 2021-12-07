const express = require('express')
const app = express()
require('../back-end/db/conn') // connection to db
// const data = require("./data");
const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')
// app.use(express.json())
// app.use(express.urlencoded())
//middlewares
//error handler express async handler
app.use((err,req,res,next)=>{
  res.status(500).send({
    message:err.message
  })
})

//routes
app.use("/api/users",userRoutes)
app.use("/api/products",productRoutes)
app.get("/", (req, res) => [res.send("this is the server")]);

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });




module.exports = app;
