import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="card">
        <span className="rate">
          <ion-icon name="star"></ion-icon>
          {movie.rate}
        </span>
        <img src={movie.posterUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
