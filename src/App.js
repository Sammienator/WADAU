
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stat from './components/Stat'
import Step from './components/Step'
import Team from './components/Team'
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <About/>
    <Stat/>
    <Step/>
    <Team/>
    <Testimonial/>
    <Footer/>
    </div>
  );
}

export default App;
