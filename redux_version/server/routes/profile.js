const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
// const passportConf = require("../passport");

const ProfileController = require("../controllers/profile");
const passportJWT = passport.authenticate("jwt", { session: false });

router.route("/").get(passportJWT, ProfileController.getProfile);

// router
//   .route("/")
//   .post(
//     validateBody(schemas.movieSchema),
//     passportJWT,
//     ProfileController.updateProfile
//   );

module.exports = router;
