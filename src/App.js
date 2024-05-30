import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stat from './components/stat';
import Step from './components/step';
import Team from './components/team';
import Testimonial from './components/testimonial';
import Footer from './components/Footer';
import Before from './components/Before';
import SalesSection from './components/sales';





function App() {
 



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
                <SalesSection/>
                <Footer />
      
      </>
      

      </div>
 
  );
}

export default App;
