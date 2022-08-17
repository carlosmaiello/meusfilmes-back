const express = require('express');
const { getAllMovies, getOneMovie, updateMovie, insertMovie, deleteMovie } = require('../controllers/movies');

const router = express.Router();

router.get('/', getAllMovies);
router.post('/', insertMovie);
router.get('/:id', getOneMovie);
router.post('/:id', updateMovie);
router.put('/:id', updateMovie);
router.patch('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;





