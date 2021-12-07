const mongoose = require("mongoose");
require('dotenv').config()
const connection = function () {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("server connected to MongoDB successfully !"))
    .catch((err) => console.log("error connecting to MongoDB ", err));
};
connection();
