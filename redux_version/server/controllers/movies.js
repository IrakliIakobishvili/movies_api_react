// const JWT = require('jsonwebtoken');
const Movie = require("../models/movie");
// const { JWT_SECRET } = require('../configuration');

// signToken = user => {
//   return JWT.sign({
//     iss: '',
//     sub: user.id,
//     iat: new Date().getTime(), // current time
//     exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
//   }, JWT_SECRET);
// }

module.exports = {
  addMovie: async (req, res, next) => {
    const { Title, Year, imdbID, Poster } = req.value.body;

    const foundMovie = await Movie.findOne({ imdbID });
    if (foundMovie) {
      return res.status(403).json({ error: "Movie is already added" });
    }

    const newMovie = new Movie({
      Title: Title,
      Year: Year,
      imdbID: imdbID,
      Poster: Poster
    });

    await newMovie.save();
    res.status(200).json({ newMovie });
  },

  getMovies: async (req, res, next) => {
    const totalMovie = await Movie.find({});
    if (totalMovie) {
      console.log("request");
      return res.status(200).json({ movies: totalMovie });
    }
    return res.status(200).json({ movies: "Empty List" });
  }

  //   signIn: async (req, res, next) => {
  //     // Generate token
  //     const token = signToken(req.user);
  //     res.status(200).json({ token });
  //   },
  //   secret: async (req, res, next) => {
  //     console.log('I managed to get here!');
  //     res.json({ secret: "resource" });
  //   }
};
