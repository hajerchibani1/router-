import { useState, useId } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Moviedetail";
import Filter from "./components/Filter";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Series from "./components/Series";
import Moviedetail from "./components/Moviedetail";

function App() {
  const [movies, setmovies] = useState([
    {
      id: useId(),
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
      category: "movies",
    },
    {
      id: useId(),
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
      category: "movies",
    },
    {
      id: useId(),
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
      category: "movies",
    },
    {
      id: useId(),
      title: "movie 1",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rate: "5",
      category: "Series",
    },
    {
      id: useId(),
      title: "Free guy",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl: "https://i.ytimg.com/vi/N2R2bjxjcS0/movieposter_en.jpg",
      rate: "3.5",
      category: "Series",
    },
    {
      id: useId(),
      title: "Adam's family ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://www.miconcinemas.com/media/1712/webtheaddamsfamily2_payoffposter_resizewidth-800.jpg",
      rate: "4",
      category: "Series",
    },
  ]);

  const addmovie = (movie) => {
    setmovies([movie, ...movies]);
  };
  const [text, settext] = useState("");
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              settext={settext}
              addmovie={addmovie}
              movies={movies}
              text={text}
            />
          }
        />
        <Route path="/Series" element={<Series movies={movies} />} />
        <Route path="/Movies" element={<Movies movies={movies} />} />
        <Route path="/Movie/:id" element={<Moviedetail movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
