import React from "react";
import MovieCard from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <div className="list">
      {movies
        .filter((el) => el.category == "movies")
        .map((el) => (
          <MovieCard movie={el} />
        ))}
    </div>
  );
};

export default Movies;
