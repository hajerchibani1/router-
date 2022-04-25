import React from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const Series = ({ movies }) => {
  return (
    <div className="list">
      <h1>series</h1>
      {movies
        .filter((el) => el.category == "Series")
        .map((el) => (
          <MovieCard movie={el} />
        ))}
    </div>
  );
};

export default Series;
