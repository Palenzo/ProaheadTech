import React from 'react';
import './FounderMessage.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const FounderMessage = () => {
  return (
    <section className="founder-message" id="founder">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Founder's Message</h2>
          <p>A Word from Our Visionary Leader</p>
        </div>

        <div className="founder-content" data-aos="fade-up" data-aos-delay="200">
          <div className="founder-card">
            <div className="quote-icon">
              <FormatQuoteIcon sx={{ fontSize: '4rem', color: 'var(--primary-color)', opacity: 0.3 }} />
            </div>
            
            <div className="founder-message-text">
              <p className="message-quote">
                "I always believe that nothing is 100% complete, there is always a scope of improvement."
              </p>
              <p className="message-description">
                This philosophy drives everything we do at Proahead Technologies. We are committed 
                to continuous learning, innovation, and delivering excellence to our clients. Our 
                journey is about constant evolution and helping businesses transform through technology.
              </p>
            </div>

            <div className="founder-info">
              <div className="founder-details">
                <h3>Dharmkrit Bhagat</h3>
                <p className="founder-title">Founder & CEO</p>
                <p className="founder-tagline">Proahead Technology Solution Pvt. Ltd.</p>
              </div>

              <div className="founder-links">
                <a 
                  href="https://dhramkrit-portfolio.tiiny.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="founder-link"
                  aria-label="Visit Portfolio"
                >
                  <LanguageIcon />
                  <span>Portfolio</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/dharmkrit-bhagat-a1313b26/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="founder-link"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:dharmkritbhagat@gmail.com"
                  className="founder-link"
                  aria-label="Email"
                >
                  <EmailIcon />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="motto-section">
              <div className="motto-badge">
                <span>Our Motto</span>
              </div>
              <h4>Continuous Improvement & Innovation</h4>
              <p>
                We believe in the power of iterative progress. Every project, every solution, 
                and every interaction is an opportunity to learn, grow, and deliver better results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
