const express = require('express')
// import express from 'express'
const app = express();
const server = require('http').Server(app)
const port = process.env.PORT ||4000
// import data from './data.js'

const data = require('./data')
app.get('/',(req,res)=>[
    res.send("this is the server")
])

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})

server.listen(port,()=>{
    console.log(`React app is listening at port ${port}`)
})