import "./App.css";
import React, { useState, useEffect } from "react";
import fire from "./Components/Firebase/fire";
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

const App = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState("");

  const getTopRatedMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setMovies(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  function isUserAuth(data) {
    setUser(data);
  }

  useEffect(() => {
    isUserAuth();
  }, []);
  console.log(user);

  const logoutFunction = () => {
    fire.auth().signOut();
  };

  return (
    <Router>
      <div className="App">
        <NavbarComponent user={user} logoutFunction={logoutFunction} />
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
            <TopRatedMovies movies={movies} />
          </Route>
        </Switch>
        <Route path="/favMovies">
          <SearchMovies />
        </Route>
        <Route path="/signin">
          <LoginProcesses func={isUserAuth} />
        </Route>
      </div>
    </Router>
  );
};

export default App;
