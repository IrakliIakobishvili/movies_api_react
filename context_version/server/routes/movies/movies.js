const mongoose = require("mongoose");
const Router = require("express").Router();
const fetch = require("cross-fetch");

// const Movie = mongoose.model("movies");

// Router.post("/", (req, res, next) => {
//   const { body } = req;
//   console.log(body);
//   console.log(req.body);
//   if (!req.body.title) {
//     return res.status(422).json({
//       message: "title is required"
//     });
//   }
//   if (!req.body.content) {
//     return res.status(422).json({
//       message: "content is required"
//     });
//   }

//   if (!req.body.author) {
//     return res.status(422).json({
//       message: "content is required"
//     });
//   }

//   const news = new News(req.body);
//   return news
//     .save()
//     .then(() => res.json({ news }))
//     .catch(next);
// });

// Router.get("/", (req, res, next) => {
//   fetch("http://www.omdbapi.com/?s=inception&apikey=d8e07904")
//     .then(response => response.json())
//     .then(movies => {
//       res.json({ movies: movies });
//     })
//     .catch(error => console.error(error));
// });
module.exports = Router;
