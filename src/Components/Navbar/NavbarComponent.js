import React from 'react'
import './NavbarComponent.css'
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
          <div className='logo'>
            <i class='fas fa-tape'></i>
          </div>
          <h5 className='brand-name'>Movie Platform</h5>
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
