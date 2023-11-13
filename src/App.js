import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import TeamSection from './Components/TeamSection/TeamSection';
import Customers from './Components/Customers/Customers';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='hero'>
        <Header/>
        <HeroSection/>
      </div>
      <About/>
      <Features/>
      <TeamSection/>
      <Customers/>
      <Footer/>
    </div>
  );
}

export default App;
