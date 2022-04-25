import React from "react";
import { useParams } from "react-router-dom";

const Moviedetail = ({ movies }) => {
  const params = useParams();
  const movie = movies.find((el) => el.id == params.id);
  return (
    <div className="detail">
      <img src={movie.posterUrl}></img>
      <div className="detail-content">
        <h1>{movie.title}</h1>
        <p>{movie.description} </p>
        <b>rate:</b>
        <span>{movie.rate}</span>
        <b>category</b>
        <span>{movie.category}</span>
      </div>
    </div>
  );
};

export default Moviedetail;
