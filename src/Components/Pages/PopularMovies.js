import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./HomePageMovies.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c648afc803082b2e283b0c71a12c1f22&language=en-US"
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div class="section">
      <div className="section-header">
        <h3>Popular Movies</h3>
      </div>
      <Carousel breakPoints={breakPoints}>
        {movies.map((movie) => (
          <Item>
            <a href="#" class="movie-item">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                className="card-img-latest"
                alt={movie.title}
              />
            </a>
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovies;
