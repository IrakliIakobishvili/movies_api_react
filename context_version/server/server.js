// mongodb://<dbuser>:<dbpassword>@ds149414.mlab.com:49414/test_db
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

mongoose.connect(`mongodb://react:react123@ds149414.mlab.com:49414/test_db`, {
  useNewUrlParser: true
});
mongoose.set("debug", true);
require("./models/News");
require("./models/User");

app.use("/", require("./routes"));

app.listen(8000, () => {
  console.log("Server started on port http://localhost:8000");
});
