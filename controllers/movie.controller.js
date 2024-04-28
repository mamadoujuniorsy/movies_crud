const Movie = require('../models/movie.model.js');

const getMovies = async (req, res) =>{
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getMovie = async (req, res) =>{
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createMovie = async (req, res) =>{
  try {
    const { title, release, author, category } = req.body;
    const movie = await Movie.create({ title, release, author, category}); // Création d'un nouveau film avec les données extraites
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateMovie = async (req, res) =>{
  try {
    const { id } = req.params;
    const updateMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true }); // Utilisation de l'option { new: true } pour renvoyer le document mis à jour
    if (!updateMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteMovie = async (req, res) =>{
  try {
    const { id } = req.params;
    const deleteMovie = await Movie.findByIdAndDelete(id);
    if (!deleteMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Suppression réussie" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
};
