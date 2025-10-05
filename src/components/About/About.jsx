import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BoltIcon from '@mui/icons-material/Bolt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <LightbulbIcon sx={{ fontSize: 40, color: '#ffc107' }} />,
      title: 'Innovation',
      description: 'Bringing smarter, automated solutions'
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: '#0066cc' }} />,
      title: 'Partnership',
      description: 'Building long-term relationships with clients'
    },
    {
      icon: <BoltIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Efficiency',
      description: 'Delivering on time with precision'
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#00c9a7' }} />,
      title: 'Reliability',
      description: 'Ensuring business continuity through robust support'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>Bridging the gap between business needs and IT solutions</p>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p className="about-description">
              At <strong>Proahead Technology Solution Pvt. Ltd.</strong>, we believe technology should be 
              a growth enabler, not a challenge. Founded with a vision to bridge the gap between 
              business needs and IT solutions, we specialize in <strong>ERP consulting</strong>, 
              <strong> software implementation</strong>, and <strong>managed IT support</strong>.
            </p>
            <p className="about-description">
              As <strong>Your Digital Partner</strong>, we ensure businesses achieve seamless operations, 
              scalability, and long-term success through innovative IT solutions.
            </p>
            
            <div className="company-info">
              <div className="info-item">
                <strong>GSTIN:</strong> 10AAOCP6034A1ZY
              </div>
              <div className="info-item">
                <strong>CIN:</strong> U62099BR2024PTC068496
              </div>
            </div>
          </div>

          <div className="about-values" data-aos="fade-left">
            <h3>Our Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div 
                  className="value-card" 
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
