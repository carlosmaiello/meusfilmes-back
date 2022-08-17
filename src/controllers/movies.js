const { Movie } = require("../models");

async function getAllMovies(req, res, next) {
    try {
        res.send(await Movie.findAll());
    }
    catch (err) {
        next(err);
    }
}
async function getOneMovie(req, res, next) {
    try {
        const movie = await Movie.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!movie) throw new Error("Filme não existe");
        res.send(movie);
    }
    catch (err) {
        next(err);
    }
}
async function insertMovie(req, res, next) { 
    try {
        const movie = await Movie.create(req.body);
        res.send(movie);
    } catch (err) {
        next(err);
    }
}
async function updateMovie(req, res, next) { 
    try {
        const movie = await Movie.findOne({
            where: {
                id: req.params.id
            }
        }); 
        
        if (!movie) throw new Error("Filme não existe");

        movie.set(req.body);

        await movie.save();

        res.send(movie);

    } catch (err) {
        next(err);
    }
}
async function deleteMovie(req, res, next) { 
    try {
        const movie = await Movie.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!movie) throw new Error("Filme não existe");

        await movie.destroy();

        res.send({ success: true });

    } catch (err) {
        next(err);
    }
}

module.exports = { getAllMovies, getOneMovie, insertMovie, updateMovie, deleteMovie }