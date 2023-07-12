import React from "react";
import MovieListItem from "./MovieListItem";

export default function MovieList({ movies, onCompleteMovie }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          {...movie}
          onCompleteMovie={onCompleteMovie}
        />
      ))}
    </ul>
  );
}
