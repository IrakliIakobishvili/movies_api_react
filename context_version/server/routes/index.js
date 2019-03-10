const express = require("express");

const Router = express.Router();

Router.use("/api", require("./news"));
Router.use("/api", require("./users"));
Router.use("/api", require("./movies"));

module.exports = Router;
