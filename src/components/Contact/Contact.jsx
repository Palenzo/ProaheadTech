import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Loader from '../Loader/Loader';
import './Contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    file: null
  });

  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show loader when component mounts
    setLoading(true);
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5242880) { // 5MB limit
        setStatus({ type: 'error', message: 'File size should be less than 5MB' });
        return;
      }
      setFormData(prev => ({ ...prev, file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Initialize EmailJS with your credentials
      // Replace these with your actual EmailJS credentials
      const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const userID = 'YOUR_USER_ID'; // Replace with your EmailJS user ID

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        to_email: 'your-email@example.com' // Replace with your receiving email
      };

      // If you have a file, you can convert it to base64 or handle it separately
      if (formData.file) {
        const reader = new FileReader();
        reader.onload = async () => {
          templateParams.attachment = reader.result;
          await sendEmail(serviceID, templateID, userID, templateParams);
        };
        reader.readAsDataURL(formData.file);
      } else {
        await sendEmail(serviceID, templateID, userID, templateParams);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email us directly.' 
      });
      setIsSubmitting(false);
    }
  };

  const sendEmail = async (serviceID, templateID, userID, templateParams) => {
    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.' 
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        file: null
      });
      setFileName('');
    } catch (error) {
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    {
      city: 'Gurgaon',
      address: 'F-17, Shiv Mandir road dharam colony palam vihar Gurgaon Haryana 122017',
      mobile: '9971656854',
      icon: '📍'
    },
    {
      city: 'Kolkata',
      address: 'BF Block(Newtown), Action Area I, Newtown, New Town, West Bengal 700156',
      mobile: '9241024089',
      icon: '📍'
    },
    {
      city: 'Gaya',
      address: 'GB Colony Gaya 823002',
      mobile: '9642 75 2299',
      icon: '📍'
    }
  ];

  return (
    <>
      {loading && <Loader />}
      <section className="contact" id="contact">
        <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Get in touch with us for your digital transformation needs</p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="company-details">
              <h3>🌐 Proahead Technology Solution Pvt. Ltd.</h3>
              <p className="tagline">Your Digital Partner</p>
              
              <div className="company-reg">
                <p><strong>GSTIN:</strong> 10AAOCP6034A1ZY</p>
                <p><strong>CIN:</strong> U62099BR2024PTC068496</p>
              </div>
            </div>

            <div className="locations">
              <h4>Our Locations</h4>
              {locations.map((location, index) => (
                <div className="location-card" key={index}>
                  <div className="location-icon">{location.icon}</div>
                  <div className="location-details">
                    <h5>{location.city}</h5>
                    <p className="location-address">{location.address}</p>
                    <p className="location-mobile">
                      <i className="fas fa-phone"></i> {location.mobile}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="form-group file-upload-group">
                <label htmlFor="file">Attach File (optional)</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file" className="file-upload-label">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <span>{fileName || 'Choose file (Max 5MB)'}</span>
                  </label>
                </div>
                <small>Accepted formats: PDF, DOC, DOCX, TXT, JPG, PNG</small>
              </div>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.type === 'success' ? '✓ ' : '✗ '}
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
