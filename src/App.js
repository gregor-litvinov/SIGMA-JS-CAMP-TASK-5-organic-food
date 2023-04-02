
import './App.css';
import Presentation from './components/header/Presentation';
import Nav from "./components/nav/Nav";
import Banner from './components/Pres-Banner/Banner';
import About from './components/about-us/About';
import Testimonial from './components/testimonial/Testimonial';
import Neo from './components/offer/new';



function App() {
  return (
    <div className="App">
      <Nav />
      <Presentation />
      <Banner />
      <About />
      <Testimonial />
      <Neo />
    </div>
  );
}

export default App;
