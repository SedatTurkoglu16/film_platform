import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./HomePageMovies.css";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const LatestMoviesSlide = (props) => {
  const { url, path } = useRouteMatch();
  return (
    <div class="section">
      <div className="section-header">
        <h3>Upcoming Movies</h3>
      </div>
      <Carousel breakPoints={breakPoints}>
        {props.movies.map((movie) => (
          <Item>
            <Link
              to={{
                pathname: "./MovieInfo",
                aboutProps: {
                  name: movie,
                },
              }}
            >
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                className="card-img-latest"
                alt={movie.title}
              />
            </Link>
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default LatestMoviesSlide;
