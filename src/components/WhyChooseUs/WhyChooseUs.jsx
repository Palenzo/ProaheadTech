import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import SyncIcon from '@mui/icons-material/Sync';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SavingsIcon from '@mui/icons-material/Savings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <GroupsIcon sx={{ fontSize: 56 }} />,
      title: 'Experienced ERP & IT Professionals',
      description: 'Our team brings years of expertise in ERP systems and IT consulting'
    },
    {
      icon: <SyncIcon sx={{ fontSize: 56 }} />,
      title: 'End-to-end Digital Transformation Partner',
      description: 'Complete solutions from planning to implementation and support'
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 56 }} />,
      title: 'Proven Implementation Methodologies',
      description: 'Industry-standard processes ensuring successful deployments'
    },
    {
      icon: <SavingsIcon sx={{ fontSize: 56 }} />,
      title: 'Cost-effective & Scalable Solutions',
      description: 'Solutions that grow with your business without breaking the bank'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 56 }} />,
      title: 'Reliable Post-implementation Support',
      description: '24/7 support to ensure your systems run smoothly'
    }
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Why Choose Proahead?</h2>
          <p>Your trusted partner for digital transformation</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              className="reason-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
              <div className="check-mark">✔</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
