const express = require("express");
const Router = express.Router();

Router.use("/newses", require("./newses"));

module.exports = Router;
