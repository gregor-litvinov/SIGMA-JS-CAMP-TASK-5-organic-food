import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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
import Cart from './components/cart/Cart';
import Success from './components/success/Success';
import Shop from './components/shop/Shop';





function App() {
  const [cartState, setCartState] = useState([]);
  const [orders, setOrders] = useState([]);

  const onAddCartProduct = (product) => {
    setCartState([...cartState, product])
  };

  const removeProduct = (product) => {
    
    setCartState(cartState.filter(item => item.id !== product.id))
  };

  const clearAllProducts = () => {
    
    setCartState([])
  };
  
  const showOrders = () => {
    fetch(`https://infinite-ravine-05016.herokuapp.com/api/orders`)
    .then(r => r.json())
    .then(r => setOrders(r))
    .catch(err => console.log(err))
  }
  return (
    <Router>
      <div className="App">
        <Nav cartState={cartState} />
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/cart" element={<Cart selectedProducts={cartState} onRemoveProduct={removeProduct} clearAllProducts={clearAllProducts} /> } />
          <Route path="/" element={
            <>
              <Presentation />
              <Banner />
              <About />
              <Shop onAddProduct={onAddCartProduct} />
              <Testimonial />
              <Neo />
              <Frendly />
              <InfoProduct />
              <News />
              <Subscribe />
              <Footer />
            </>
          } />
        </Routes>
        <button onClick={showOrders}>Show Orders</button>
        {orders.length ? (
          <ul>
            {orders.map(order => {
              return (
                <li>
                  <span>id: {order.id} </span>
                  <span>cost: {order.cost} </span>
                  <span>first_name: {order.first_name} </span>
                  <span>second_name: {order.second_name} </span>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </Router>
  );
}

export default App;

