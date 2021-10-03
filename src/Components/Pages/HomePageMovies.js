import React, { useState, useEffect } from "react";
import "./HomePageMovies.css";
import LatestMoviesSlide from "./LatestMoviesSlide";
import PopularMovies from "./PopularMovies";
import axios from "axios";
require("dotenv").config();

const HomePageMovies = () => {
  const [movies, setMovies] = useState([]);

  const getLatestMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c648afc803082b2e283b0c71a12c1f22&language=en-US&page=1"
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    getLatestMovies();
  }, []);

  return (
    <div>
      <LatestMoviesSlide movies={movies} />
      <PopularMovies />
    </div>
  );
};

export default HomePageMovies;
