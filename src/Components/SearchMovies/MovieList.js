import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie, index) => (
        <div className="col-sm mb-4">
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
