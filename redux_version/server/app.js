const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === "test") {
  mongoose.connect("mongodb://localhost/APIAuthenticationTEST", {
    useMongoClient: true
  });
} else {
  mongoose.connect(
    "mongodb://irakli:irakli123@ecommerce-shard-00-00-pca9p.mongodb.net:27017,ecommerce-shard-00-01-pca9p.mongodb.net:27017,ecommerce-shard-00-02-pca9p.mongodb.net:27017/MoviesDB?ssl=true&replicaSet=Ecommerce-shard-0&authSource=admin&retryWrites=true",
    {
      useMongoClient: true
    }
  );
}

const app = express();
app.use(cors());

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === "test") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json());

// Routes
app.use("/users", require("./routes/users"));
app.use("/movies", require("./routes/movies"));
app.use("/profile", require("./routes/profile"));

module.exports = app;
