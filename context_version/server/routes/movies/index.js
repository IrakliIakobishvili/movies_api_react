const express = require("express");
const Router = express.Router();

Router.use("/movies", require("./movies"));

module.exports = Router;
