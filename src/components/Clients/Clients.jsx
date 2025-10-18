import React from 'react';
import './Clients.css';

const Clients = () => {
  const clients = [
    {
      name: 'Hicron',
      logo: 'https://www.hicron.com/wp-content/uploads/2019/11/hicron_logo-1.svg'
    },
    {
      name: 'Abdul Latif Jameel',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Abdul_Latif_Jameel_logo.svg/1200px-Abdul_Latif_Jameel_logo.svg.png'
    },
    {
      name: 'E.A. Juffali & Brothers',
      logo: 'https://www.juffali.com/wp-content/uploads/2021/03/cropped-Juffali-Logo-1.png'
    },
    {
      name: 'NTPC',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/NTPC_Logo.svg/1200px-NTPC_Logo.svg.png'
    },
    {
      name: 'Saud Bahwan Group',
      logo: 'https://www.saudbahwangroup.com/images/logo.png'
    },
    {
      name: 'Deloitte',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/2560px-Deloitte.svg.png'
    },
    {
      name: 'Accenture',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png'
    },
    {
      name: 'Nissan',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.svg/2560px-Nissan_logo.svg.png'
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
