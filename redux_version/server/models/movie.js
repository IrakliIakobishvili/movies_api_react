const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

// Create a schema
const movieSchema = new Schema(
  {
    Title: {
      type: String,
      required: true
    },
    Year: {
      type: Number,
      required: true
    },
    imdbID: {
      type: String,
      required: true,
      unique: true
    },
    Poster: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// movieSchema.pre("save", async function(next) {
//   try {
//     // console.log("entered");
//     // if (this.method !== "local") {
//     //   next();
//     // }
//     // Generate a salt
//     // const salt = await bcrypt.genSalt(10);
//     // Generate a password hash (salt + hash)
//     // const passwordHash = await bcrypt.hash(this.local.password, salt);
//     // Re-assign hashed version over original, plain text password
//     // this.local.password = passwordHash;
//     // console.log("exited");
//     // next();
//   } catch (error) {
//     next(error);
//   }
// });

// movieSchema.methods.isValidPassword = async function(newPassword) {
//   try {
//     return await bcrypt.compare(newPassword, this.local.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// Create a model
const Movie = mongoose.model("movie", movieSchema);

// Export the model
module.exports = Movie;
