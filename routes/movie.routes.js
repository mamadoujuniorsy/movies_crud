const express = require('express');
const router = express.Router();
const {getMovies, getMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/movie.controller.js');

router.get('/', getMovies);

router.get('/:id', getMovie);

router.post('/', createMovie);
//mettre à jour utilisateur
router.put('/:id', updateMovie),
//Supprimer utilisateur
router.delete('/:id', deleteMovie);

module.exports = router;