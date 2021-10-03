import "./App.css";
import React, { useState } from "react";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/FontAwesome/FontAwesomeIcons";
import ImageSlider from "./Components/SliderSection/ImageSlider";
import TopRatedMovies from "./Components/Movies/TopRatedMovies";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchMovies from "./Components/SearchMovies/SearchMovies";
import LoginProcesses from "./Components/Firebase/LoginProcesses";
import MovieInfo from "./Components/Movies/MovieInfo";
import HomePageMovies from "./Components/Pages/HomePageMovies";
require("dotenv").config();

class App extends React.Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    this.setState({ movies: response.data.results });
    console.log(response.data.results);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavbarComponent />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <HomePageMovies />
                </React.Fragment>
              )}
            ></Route>
            <Route path="/topRated">
              <TopRatedMovies movies={this.state.movies} />
            </Route>
          </Switch>
          <Route path="/favMovies">
            <SearchMovies />
          </Route>
          <Route path="/signin">
            <LoginProcesses />
          </Route>
          <Route path="/MovieInfo">
            <MovieInfo />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
