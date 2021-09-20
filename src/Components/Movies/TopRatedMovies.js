import React from 'react'

const PopularMovies = (props) => {

    return (
      <div className='row'>
        {props.movies.map(movie => (
          <div className='col-lg-2' key={movie.id}>
            <div className='card m-3 mb-4 shadow-sm'>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                className='card-img-top'
                alt='Sample Movie'
              />
              <div className='card-body'>
                <h5 className='card-title'>{movie.title}</h5>
                <p className='card-text'>popularity: {movie.popularity}</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <h2>
                    <span className='badge bg-info'>{movie.vote_average}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default PopularMovies;
