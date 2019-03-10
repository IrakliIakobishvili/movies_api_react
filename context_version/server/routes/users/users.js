const mongoose = require("mongoose");
const Router = require("express").Router();

const Customer = mongoose.model("customers");

Router.post("/", (req, res, next) => {
  // const { body } = req;

  if (!req.body.title) {
    return res.status(422).json({
      message: "title is required"
    });
  }
  if (!req.body.password) {
    return res.status(422).json({
      message: "content is required"
    });
  }

  const news = new Customer(req.body);
  return news
    .save()
    .then(() => res.json({ news }))
    .catch(next);
});

// GET url 400
Router.get("/", (req, res, next) => {
  // : newses.map(news => news.toJSON())
  return Customer.find({})
    .sort({ created_at: "descending" })
    .then(customers => res.json( customers ))
    .catch(next);
});
module.exports = Router;
