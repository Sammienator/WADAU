
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stat from './components/Stat'
import Step from './components/Step'
import Team from './components/Team'
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Before from './components/Before';
import SalesComponent from './components/sales';
import CartComponent from './components/cart';


function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };


  return (
    <div className="App">
    <Header/>
    <Before/>
    <Hero/>
    <About/>
    
    <Stat/>
    <Step/>
    <Team/>
    <Testimonial/>
    <SalesComponent addToCart={addToCart} />
    <CartComponent cartItems={cartItems} removeFromCart={removeFromCart} />
    <Footer/>
    </div>
  );
}

export default App;
