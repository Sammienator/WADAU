import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stat from './components/stat';
import Step from './components/step';
import Team from './components/team';
import Testimonial from './components/testimonial';
import Footer from './components/Footer';
import Before from './components/Before';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';



function App() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const addToCart = product => setCart([...cart, product]);
  const removeFromCart = index => setCart(cart.filter((_, i) => i !== index));
  const startCheckout = () => setCheckout(true);
  const clearCart = () => {
    setCart([]);
    setCheckout(false);
  };


  return (
 
      <div className="App">
        <Header />
       
          
              <>
                <Before />
                <Hero />
                <About />
                <Stat />
                <Step />
                <Team />
                <Testimonial />
                {checkout ? (
        <Checkout cart={cart} total={cart.reduce((sum, item) => sum + item.price, 0)} clearCart={clearCart} />
      ) : (
        <>
          <ProductList addToCart={addToCart} />
          <Cart cart={cart} removeFromCart={removeFromCart} checkout={startCheckout} />
        </>
      )}
              </>
      
   
        <Footer />
      </div>
 
  );
}

export default App;
