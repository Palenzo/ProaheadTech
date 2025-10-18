import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Components
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Industries from './components/Industries/Industries';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import MissionVision from './components/MissionVision/MissionVision';
import OurApproach from './components/OurApproach/OurApproach';
import Clients from './components/Clients/Clients';
import FounderMessage from './components/FounderMessage/FounderMessage';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Hide loader after content loads
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading && <Loader />}
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Industries />
              <Clients />
              <WhyChooseUs />
              <MissionVision />
              <OurApproach />
              <FounderMessage />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
