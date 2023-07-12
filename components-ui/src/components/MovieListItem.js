import React from "react";
import "./MovieListItem.scss";

export default function MovieListItem({ id, title, year, onCompleteMovie }) {
  const handleCompleteClicked = (event) => {
    event.preventDefault();
    onCompleteMovie(id);
  };
  return (
    <li className="MovieListItem">
      <h3>{title}</h3>
      <p>Released: {year}</p>
      <button onClick={(e) => handleCompleteClicked(e)}>Complete</button>
    </li>
  );
}
