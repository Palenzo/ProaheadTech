import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Industries from './components/Industries/Industries';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import MissionVision from './components/MissionVision/MissionVision';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Industries />
              <WhyChooseUs />
              <MissionVision />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
