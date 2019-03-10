const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    author: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("news", NewsSchema);
