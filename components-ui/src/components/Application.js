import React, { useState } from "react";

import "components/Application.scss";
import MovieList from "./MovieList";
import Form from "./Form";

export default function Application() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Predator",
      year: 1991,
    },
    {
      id: 2,
      title: "Titanic",
      year: 1991,
    },
    {
      id: 3,
      title: "Inception",
      year: 2010,
    },
  ]);

  const addMovie = (title) => {
    setMovies((prevState) => [...prevState, { title, year: 2023 }]);
  };

  const removeMovie = (id) => {
    setMovies((prevState) => prevState.filter((movie) => movie.id !== id));
  };

  return (
    <main className="App">
      <h1 style={{ color: "white" }}>MY Movie Bucket List</h1>
      <Form onAddMovie={addMovie} />
      <MovieList movies={movies} onCompleteMovie={removeMovie} />
    </main>
  );
}
