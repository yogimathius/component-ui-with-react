import React, { useState } from "react";
import "./Form.scss";

export default function Form(props) {
  const [movieTitle, setMovieTitle] = useState("");

  const handleClickAddMovie = (event) => {
    event.preventDefault();
    props.onAddMovie(movieTitle);
  };

  return (
    <form className="Form">
      <label htmlFor="Add Movie To Watch">Add Movie To Watch</label>
      <input
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        placeholder="Add movie to watch..."
      />
      <button onClick={(e) => handleClickAddMovie(e)}>Add Movie</button>
    </form>
  );
}
