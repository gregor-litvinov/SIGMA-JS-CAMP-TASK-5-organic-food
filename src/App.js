
import './App.css';
import Presentation from './components/header/Presentation';
import Nav from "./components/nav/Nav";
import Banner from './components/Pres-Banner/Banner';
import About from './components/about-us/About';
import Testimonial from './components/testimonial/Testimonial';
import Neo from './components/offer/new';
import Frendly from './components/frendly-block/Frendly';
import InfoProduct from './components/product-info/Product-info';
import News from './components/news/News';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';




function App() {
  return (
    <div className="App">
      <Nav />
      <Presentation />
      <Banner />
      <About />
      <Testimonial />
      <Neo />
      <Frendly />
      <InfoProduct />
      <News />
      <Subscribe />
      <Footer />

    </div>
  );
}

export default App;
