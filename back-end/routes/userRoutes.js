const express = require('express');
const router = express.Router();
const expressAsyncHandler=require('express-async-handler')
const userModel = require('../models/userModel')
const data = require('../data')
router.get('/seed',expressAsyncHandler(async(req,res)=>{
    // try {
        const createdUser = await userModel.insertMany(data.user)
        console.log(createdUser)
        res.send({createdUser})
        
    // } catch (error) {
        // console.log("error while saving data to db ",error)
    // }
}))
module.exports=router;