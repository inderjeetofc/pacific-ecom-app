const mongoose = require("mongoose");
require('dotenv').config()
const connection = function () {
  mongoose
    .connect(process.env.MONGODB_URL||'mongodb://localhost:27017/pacific-ecom-dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("server connected to MongoDB successfully !"))
    .catch((err) => console.log("error connecting to MongoDB ", err));
};
connection();
