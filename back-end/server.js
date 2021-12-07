const express = require("express");
const app = require("./app");
const server = require("http").Server(app);
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
