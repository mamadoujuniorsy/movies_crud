const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
  {
    title: String,
    release: Date,
    author: String,
    category: String
  },
  { timestamps: true }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
