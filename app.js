const express = require("express");
const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};
const apiMovies = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Success",
    movies: movies,
  });
};
const apiMovieID = (req, res) => {
  const movieId = parseInt(req.params.id);
  const findMovie = movies.find((movie) => movie.id === movieId);

  if (findMovie) {
    res.status(200).json(findMovie);
  } else {
    res.status(404).send("Error 404 Not found");
  }
};

app.get("/", welcome);
app.get("/api/movies", apiMovies);
app.get("/api/movies/:id", apiMovieID);

module.exports = app;
