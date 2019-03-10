const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
// const passportConf = require("../passport");

const { validateBody, schemas } = require("../helpers/routeHelpers");
const MovieController = require("../controllers/movies");
// const passportSignIn = passport.authenticate("local", { session: false });
const passportJWT = passport.authenticate("jwt", { session: false });

router.route("/").get(MovieController.getMovies);

// router
//   .route("/")
//   .post(
//     validateBody(schemas.movieSchema),
//     passportSignIn,
//     MovieController.addMovie
//   );

router
  .route("/")
  .post(
    validateBody(schemas.movieSchema),
    passportJWT,
    MovieController.addMovie
  );

// router.route("/secret").get(passportJWT, UsersController.secret);

module.exports = router;
