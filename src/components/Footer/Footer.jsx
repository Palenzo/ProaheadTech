import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Industries', path: '/#industries' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'ERP Implementation',
    'IT Support Services',
    'Business Process Optimization',
    'Custom Development',
    'Cloud Solutions'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="https://res.cloudinary.com/dxfyyhhus/image/upload/v1759725787/Proahead_upscayl_16x_upscayl-standard-4x_ygpr5v.png" alt="Proahead Technology Logo" className="footer-logo-image" />
              <span className="logo-text">
                <strong>Proahead</strong> Technology
              </span>
            </div>
            <p className="footer-tagline">Your Digital Partner</p>
            <p className="footer-description">
              Leading provider of ERP Implementation, IT Consulting, and Support Services, 
              helping businesses achieve digital transformation.
            </p>
            <div className="footer-company-info">
              <p><strong>GSTIN:</strong> 10AAOCP6034A1ZY</p>
              <p><strong>CIN:</strong> U62099BR2024PTC068496</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-contact-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <LocationOnIcon sx={{ fontSize: 20 }} />
                <div>
                  <strong>Gurgaon</strong>
                  <p>F-17, Shiv Mandir road, Palam Vihar</p>
                  <p className="phone-info">
                    <PhoneIcon sx={{ fontSize: 14 }} /> 9971656854
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <LocationOnIcon sx={{ fontSize: 20 }} />
                <div>
                  <strong>Kolkata</strong>
                  <p>BF Block, Newtown, Action Area I</p>
                  <p className="phone-info">
                    <PhoneIcon sx={{ fontSize: 14 }} /> 9241024089
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <LocationOnIcon sx={{ fontSize: 20 }} />
                <div>
                  <strong>Gaya</strong>
                  <p>GB Colony Gaya 823002</p>
                  <p className="phone-info">
                    <PhoneIcon sx={{ fontSize: 14 }} /> 9642 75 2299
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Proahead Technology Solution Pvt. Ltd. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
