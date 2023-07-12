import React from "react";
import { storiesOf } from "@storybook/react";
import MovieListItem from "components/MovieListItem";
import MovieList from "components/MovieList";
import Form from "components/Form";
import { action } from "@storybook/addon-actions";

const movies = [
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
];

storiesOf("MovieListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Base", () => <MovieListItem title="Predator" year={1991} />)
  .add("Clickable", () => (
    <MovieListItem
      id={1}
      title="Predator"
      year={1991}
      onCompleteMovie={action("on complete movie")}
    />
  ));

storiesOf("MovieList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Base", () => (
    <MovieList movies={movies} onCompleteMovie={action("on complete movie")} />
  ));

storiesOf("Form", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Base", () => <Form onAddMovie={action("on add movie")} />);
