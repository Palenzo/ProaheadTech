import React from 'react';
import FactoryIcon from '@mui/icons-material/Factory';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import './Industries.css';

const Industries = () => {
  const industries = [
    { icon: <FactoryIcon sx={{ fontSize: 64 }} />, name: 'Manufacturing', color: '#0066cc' },
    { icon: <DirectionsCarIcon sx={{ fontSize: 64 }} />, name: 'Automotive', color: '#00a8e8' },
    { icon: <ShoppingCartIcon sx={{ fontSize: 64 }} />, name: 'Retail & E-commerce', color: '#ff6b35' },
    { icon: <LocalHospitalIcon sx={{ fontSize: 64 }} />, name: 'Healthcare', color: '#00c9a7' },
    { icon: <LocalShippingIcon sx={{ fontSize: 64 }} />, name: 'Logistics & Supply Chain', color: '#845ec2' },
    { icon: <BusinessCenterIcon sx={{ fontSize: 64 }} />, name: 'Professional Services', color: '#f9a826' }
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Industries We Serve</h2>
          <p>Tailored ERP & IT solutions for diverse industries</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              className="industry-card" 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              style={{ '--card-color': industry.color }}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
