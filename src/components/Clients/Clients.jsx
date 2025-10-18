import React from 'react';
import './Clients.css';

const Clients = () => {
  const clients = [
    {
      name: 'Hicron',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUm-BhKKTC26yTpzB2dorW19GGWpiVXfoqw&s'
    },
    {
      name: 'Abdul Latif Jameel',
      logo: 'https://www.alj.com/assets/alj-logo.svg'
    },
    {
      name: 'E.A. Juffali & Brothers',
      logo: 'https://www.juffali.com/wp-content/themes/juffali/assets/images/logo.svg'
    },
    {
      name: 'NTPC',
      logo: 'https://www.ntpc.co.in/sites/all/themes/ntpc/images/logo.svg'
    },
    {
      name: 'Saud Bahwan Group',
      logo: 'https://www.saudbahwangroup.com/images/logo.png'
    },
    {
      name: 'Deloitte',
      logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-1.svg'
    },
    {
      name: 'Accenture',
      logo: 'https://cdn.worldvectorlogo.com/logos/accenture-4.svg'
    },
    {
      name: 'Nissan',
      logo: 'https://cdn.worldvectorlogo.com/logos/nissan-6.svg'
    }
  ];

  return (
    <section className="clients" id="clients">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Trusted Clients</h2>
          <p>Trusted by Industry Leaders for Over 5 Years</p>
        </div>

        <div className="clients-showcase" data-aos="fade-up" data-aos-delay="200">
          <div className="clients-slider">
            {clients.map((client, index) => (
              <div 
                className="client-card" 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={100 * index}
              >
                <div className="client-logo-wrapper">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="client-name-fallback" style={{ display: 'none' }}>
                    {client.name}
                  </div>
                </div>
                <h4>{client.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="trust-statement" data-aos="fade-up" data-aos-delay="400">
          <p>
            We are proud to serve these prestigious organizations, delivering excellence 
            and innovation in every project for over 5 years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
