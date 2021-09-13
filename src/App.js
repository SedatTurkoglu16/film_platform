import './App.css';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/FontAwesome/FontAwesomeIcons';
import ImageSlider from './Components/SliderSection/ImageSlider';
import { SliderData } from './Components/SliderSection/SliderData';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
