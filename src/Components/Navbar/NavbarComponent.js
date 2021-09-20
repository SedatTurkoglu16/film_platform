import React from 'react'
import './NavbarComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements'
const NavbarComponent = () => {
  return (
    <div>
      <Nav>
        <NavLink to='/'>
          <FontAwesomeIcon icon='tape' />
          <h5>Movie Platform</h5>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='./topRated' type='button'>
            {' '}
            Top Movies
          </NavLink>
          <NavLink to='/favMovies' type='button'>
            {' '}
            Search Movies
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  )
}

export default NavbarComponent
