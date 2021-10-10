import React from "react";
import "./NavbarComponent.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const NavbarComponent = (props) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <div className="logo">
            <i class="fas fa-tape"></i>
          </div>
          <h5 className="brand-name">Movie Platform</h5>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="./topRated" type="button">
            Top Movies
          </NavLink>
          {props.user ? (
            <NavLink to="favoMovies" type="button">
              My Favorities
            </NavLink>
          ) : (
            <h1></h1>
          )}
          <NavLink to="/favMovies" type="button">
            Search Movies
          </NavLink>
          <NavBtn>
            {props.user ? (
              <button
                className="btn btn-danger logout-button"
                onClick={props.logoutFunction}
              >
                Logout
              </button>
            ) : (
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            )}
          </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavbarComponent;
