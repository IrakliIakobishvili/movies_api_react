const mongoose = require("mongoose");
const Router = require("express").Router();

const News = mongoose.model("news");

Router.post("/", (req, res, next) => {
  const { body } = req;
  console.log(body);
  console.log(req.body);
  if (!req.body.title) {
    return res.status(422).json({
      message: "title is required"
    });
  }
  if (!req.body.content) {
    return res.status(422).json({
      message: "content is required"
    });
  }

  if (!req.body.author) {
    return res.status(422).json({
      message: "content is required"
    });
  }

  const news = new News(req.body);
  return news
    .save()
    .then(() => res.json({ news }))
    .catch(next);
});

// GET url 400
Router.get("/", (req, res, next) => {
  // : newses.map(news => news.toJSON())
  return News.find({})
    .sort({ created_at: "descending" })
    .then(newses => res.json(newses))
    .catch(next);
});
module.exports = Router;
