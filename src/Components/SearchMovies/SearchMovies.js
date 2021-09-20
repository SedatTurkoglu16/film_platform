import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './MovieList'
require('dotenv').config()

const SearchMovies = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=863e3b25`
    const response = await fetch(url)
    const responseJson = await response.json()
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest()
  }, [searchValue])

  return (
    <div className='container-fluid movie-app'>
      <input
        className='form-control'
        placeholder='Search A Movie...'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <div className='col-lg-6 d-flex mt-4 mb-4'>
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default SearchMovies
