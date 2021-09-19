import React from 'react'
import './NavbarComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <div className='movie-icon'>
            <FontAwesomeIcon icon='tape' />
          </div>
          <a className='navbar-brand' href='#'>
            <h1 className='brand-name'>Movie Platform</h1>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'F
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item1'>
                <a className='nav-link active' aria-current='page' href='#'>
                  <Link
                    className='top-rated-name'
                    to='/favMovies'
                    type='button'
                  >
                    My Favorite Movies
                  </Link>
                </a>
              </li>
              <li className='nav-item2'>
                <a className='nav-link' href='#'>
                  <Link className='top-rated-name' to='/topRated' type='button'>
                    Top Rated Movies
                  </Link>
                </a>
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search a Movie'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarComponent
