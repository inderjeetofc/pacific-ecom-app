const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const data = require("../data");
const bcrypt = require('bcrypt')
const _=require('lodash')
const { generateToken } = require("../utils");
router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // try {
    const createdUser = await userModel.insertMany(data.user);
    console.log(createdUser);
    res.send({ createdUser });

    // } catch (error) {
    // console.log("error while saving data to db ",error)
    // }
  })
);
router.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    let userDataEntered = _.pick(req.body,['email','password']);
    // console.log(userDataEntered)
    let userData = await userModel.findOne({ email: userDataEntered.email });
    // console.log(userData)
    if (userData) {
      if (bcrypt.compareSync(userDataEntered.password, userData.password)) {
        res.status(200).send({
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          isAdmin:userData.isAdmin,
          token: await generateToken(req,res,userData)
        });
      } else {
        res.status(401).send({
          message: "Invalid password !",
        });
      }
    } else {
      res.status(401).send({
        message: "Email does not Exist !",
      });
    }
  })
);

module.exports = router;
