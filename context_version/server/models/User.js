const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema(
  {
    title: String,
    password: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("customers", NewsSchema);
