<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import './App.css'
import React from 'react'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/FontAwesome/FontAwesomeIcons'
import ImageSlider from './Components/SliderSection/ImageSlider'
import { SliderData } from './Components/SliderSection/SliderData'
import TopRatedMovies from './Components/Movies/TopRatedMovies'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
require('dotenv').config()

class App extends React.Component {
  state = {
    movies: []
  }

  async componentDidMount () {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
    this.setState({ movies: response.data.results })
    console.log(response.data.results)
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <React.Fragment>
                <NavbarComponent />
                <ImageSlider slides={SliderData} />
              </React.Fragment>
            )}>
              
            </Route>
          <Route path='/topRated'>
            <TopRatedMovies movies={this.state.movies} />
          </Route>
          </Switch>
        </div>
      </Router>
    )
  }
>>>>>>> 5106b9a (I got api from tmdb. I created topRated page and listed top Movies. I used router for routing another page or components.)
}

export default App
