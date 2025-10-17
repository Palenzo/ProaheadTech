import React, { useState, useEffect } from 'react';
import CloudIcon from '@mui/icons-material/Cloud';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (minimum 2.5 seconds for smooth animation)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  // Tech terms that float in the background
  const techTerms = [
    'SAP', 'ABAP', 'Java', 'Oracle', 'ERP', 'Cloud',
    'Python', '.NET', 'Dynamics', 'Odoo', 'AI/ML',
    'React', 'Node.js', 'Azure', 'AWS', 'DevOps',
    'SQL', 'MongoDB', 'Docker', 'Kubernetes', 'API'
  ];

  return (
    <div className="loader-wrapper">
      {/* Floating tech terms in background */}
      <div className="floating-terms">
        {techTerms.map((term, index) => (
          <span
            key={index}
            className="tech-term"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {term}
          </span>
        ))}
      </div>

      <div className="loader-content">
        {/* Cloud with logo */}
        <div className="cloud-container">
          <CloudIcon className="cloud-icon" />
          <div className="logo-in-cloud">
            <img src="/proahead.png" alt="Proahead Technology" className="loader-logo-image" />
          </div>
        </div>

        {/* Main text animation */}
        <div className="loader-animation">
          <div className="loader-text">
            <span className="letter">P</span>
            <span className="letter">r</span>
            <span className="letter">o</span>
            <span className="letter">a</span>
            <span className="letter">h</span>
            <span className="letter">e</span>
            <span className="letter">a</span>
            <span className="letter">d</span>
          </div>
          <div className="loader-subtitle">Technology Solution</div>
        </div>

        {/* Loading spinner */}
        <div className="loader-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>

        <p className="loader-tagline">Your Digital Partner</p>
      </div>
    </div>
  );
};

export default Loader;
