import React from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";

const Home = ({ settext, addmovie, movies, text }) => {
  return (
    <div>
      <div className="home">
        <h1>welcome to fox movies </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fox_Movies_%28Asia%29_logo.svg/2560px-Fox_Movies_%28Asia%29_logo.svg.png"
          alt=""
        />
      </div>
      <Filter settext={settext} addmovie={addmovie} />
      <MovieList movies={movies} text={text} />
    </div>
  );
};

export default Home;
