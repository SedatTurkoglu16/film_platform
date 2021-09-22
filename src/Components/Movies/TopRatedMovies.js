import React from 'react'
import './TopRatedMovies.css'

const PopularMovies = (props) => {

  const abc = 2;

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
              <div className='card-body' >
                <h5 className='card-title'>{movie.title}</h5>
                <div className='rating d-flex justify-content-between align-items-center'>
                  <h2>
                    <span className='badge'>{movie.vote_average}</span>
                  </h2>
                  <div>{abc == 1 ? (
                    <> 
                    Kalp
                    </>
                  ) : ( <> </>)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default PopularMovies;
