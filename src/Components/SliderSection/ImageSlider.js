import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './ImageSlider.css'

const ImageSlider = (props) => {
  

  return (
    <div className='hero-section'>
      <div className='hero-slide'>
        <div className='owl-carousel carousel-nav-center' id='hero-carousel'>
          {props.movies.map(movie => (
            <div className='hero-slide-item'>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                alt=''
              />
              <div className='overlay'></div>
              <div className='hero-slide-item-content'>
                <div className='item-content-wraper'>
                  <div className='item-content-title top-down'>{movie.title}</div>
                  <div className='movie-infos top-down delay-2'>
                    <div className='movie-info'>
                      <i className='bx bxs-star'></i>
                      <span>{movie.vote_average}</span>
                    </div>
                    <div className='movie-info'>
                      <i className='bx bxs-time'></i>
                      <span>120 mins</span>
                    </div>
                    <div className='movie-info'>
                      <span>HD</span>
                    </div>
                    <div className='movie-info'>
                      <span>16+</span>
                    </div>
                  </div>
                  <div className='item-content-description top-down delay-4'>
                    {movie.overview}
                  </div>
                  <div className='item-action top-down delay-6'>
                    <a href='#' class='btn btn-hover'>
                      <i className='bx bxs-right-arrow'></i>
                      <span>Watch now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
