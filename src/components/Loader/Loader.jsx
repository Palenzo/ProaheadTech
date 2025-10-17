import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  // Professional technical terms to display
  const techTerms = [
    'SAP', 'ABAP', 'Java', 'Python', 'React', 'Node.js',
    'AWS', 'Azure', 'DevOps', 'Cloud', 'AI/ML', 'Blockchain',
    'Microservices', 'API', 'Database', 'Security', 'Analytics',
    'Mobile', 'Web', 'ERP', 'CRM', 'IoT'
  ];

  useEffect(() => {
    // Simulate loading time (minimum 2 seconds for smooth animation)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrapper">
      {/* Floating technical terms background */}
      <div className="tech-terms-background">
        {techTerms.map((term, index) => (
          <span
            key={index}
            className="tech-term"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${0.8 + Math.random() * 0.7}rem`
            }}
          >
            {term}
          </span>
        ))}
      </div>
      
      <div className="loader-content">
        <div className="loader-logo">
          <img src="/proahead.png" alt="Proahead Technology" className="loader-logo-image" />
        </div>
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
