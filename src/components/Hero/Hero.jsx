import React from 'react';
import { Link } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ThreeHero from '../ThreeHero/ThreeHero';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <ThreeHero />
      </div>
      
      <div className="container">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-text">
            <span className="hero-badge">
              <PublicIcon sx={{ fontSize: 20 }} /> Your Digital Partner
            </span>
            <h1 className="hero-title">
              Welcome to <span style={{ color: 'black' }}>Pro</span><span style={{ color: 'orange' }}>Ahead</span><br />
              Technology Solution Pvt. Ltd.
            </h1>
            <p className="hero-description">
              We are a leading provider of <strong>ERP Implementation</strong>, <strong>IT Consulting</strong>, 
              and <strong>Support Services</strong>, helping businesses simplify operations, improve efficiency, 
              and accelerate growth. With deep industry expertise and a customer-first approach, 
              we deliver end-to-end digital transformation solutions.
            </p>
            <div className="hero-tagline">
              <RocketLaunchIcon sx={{ fontSize: 40, color: '#ff6b35' }} />
              <h2>Your Business. Our Technology. Unlimited Possibilities.</h2>
            </div>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <a href="#services" className="btn btn-secondary">Our Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
