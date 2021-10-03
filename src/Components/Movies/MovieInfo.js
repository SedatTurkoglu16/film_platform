import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MovieInfo.css'

const MovieInfo = () => {
  return (
    <div>
      <div className='hero-section'>
        <div className='hero-slide'>
          <div className='owl-carousel carousel-nav-center' id='hero-carousel'>
            <div className='hero-slide-item'>
              <img
                src='https://images4.alphacoders.com/844/thumb-1920-844967.jpg'
                alt=''
              />
              <div className='overlay'></div>
              <div className='hero-slide-item-content'>
                <div className='item-content-wraper'>
                  <div className='item-content-title top-down'>Spider Man</div>
                  <div className='movie-infos top-down delay-2'>
                    <div className='movie-info'>
                      <i className='bx bxs-star'></i>
                      <span>7.7</span>
                    </div>
                    <div className='movie-info'>
                      <i className='bx bxs-time'></i>
                      <span>123 mins</span>
                    </div>
                    <div className='movie-info'>
                      <span>HD</span>
                    </div>
                    <div className='movie-info'>
                      <span>16+</span>
                    </div>
                  </div>
                  <div className='item-content-description top-down delay-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt cupiditate maiores reiciendis aspernatur. Vero
                    assumenda facere, laborum magni ducimus modi eos enim
                    praesentium veniam, beatae obcaecati eaque doloribus ad ea
                    repellat vel doloremque fuga rem pariatur quas nulla eum
                    illum iure? Placeat, ea. Nobis, consequatur.
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
