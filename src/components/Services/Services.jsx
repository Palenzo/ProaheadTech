import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <StarIcon sx={{ fontSize: 56, color: '#ffc107' }} />,
      title: 'ERP Implementation & Consulting',
      items: [
        'End-to-end ERP project planning & deployment',
        'SAP, Oracle, Microsoft Dynamics, and Odoo implementation',
        'Business process re-engineering & gap analysis',
        'Data migration & system integration',
        'Post-go-live stabilization & user training'
      ]
    },
    {
      icon: <BuildIcon sx={{ fontSize: 56, color: '#00a8e8' }} />,
      title: 'IT Support & Managed Services',
      items: [
        '24/7 IT helpdesk support (onsite & remote)',
        'Application management & troubleshooting',
        'Server, database & cloud support',
        'System monitoring, upgrades, and patching',
        'End-user training & documentation'
      ]
    },
    {
      icon: <BarChartIcon sx={{ fontSize: 56, color: '#845ec2' }} />,
      title: 'Business Process Optimization',
      items: [
        'Workflow automation & efficiency improvement',
        'Customized reporting, dashboards & analytics',
        'Compliance, security & audit readiness',
        'Integration with CRM, HRMS, e-commerce, and mobile apps'
      ]
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 56, color: '#ff6b35' }} />,
      title: 'Custom Development & Integration',
      items: [
        'ABAP / Java / .NET / Python-based development',
        'API & third-party tool integrations',
        'Add-on module development',
        'Mobile application & portal solutions'
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>Comprehensive IT solutions tailored to your business needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
