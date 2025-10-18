import React from 'react';
import './OurApproach.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OurApproach = () => {
  const approaches = [
    {
      icon: <FavoriteIcon sx={{ fontSize: '3rem', color: '#0066cc' }} />,
      title: "Our Passion",
      description: "Our passion for understanding your business drives everything we do. We take time to learn about your unique challenges and opportunities."
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: '3rem', color: '#00a8e8' }} />,
      title: "Cost-Effective Solutions",
      description: "We provide cost-effective, high-quality application services that deliver maximum value without compromising on quality."
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: '3rem', color: '#ff6b35' }} />,
      title: "Transformation",
      description: "Our consulting capabilities help transform your business through innovative solutions and strategic guidance."
    },
    {
      icon: <SpeedIcon sx={{ fontSize: '3rem', color: '#0066cc' }} />,
      title: "Continuous Optimization",
      description: "Continuous effort on optimization of overall support efficiency ensures your systems run at peak performance."
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: '3rem', color: '#00a8e8' }} />,
      title: "SLA Management",
      description: "We manage SLA-based delivery and ensure best practices to enable continuous improvement and reduction of recurring incident volume."
    },
    {
      icon: <GroupsIcon sx={{ fontSize: '3rem', color: '#ff6b35' }} />,
      title: "24/7 Support",
      description: "Help-desk support with 24/7 coverage on AMS service through web, phone, email, and online help."
    }
  ];

  const capabilities = [
    "Effective and quick response to changing business needs and dynamics",
    "Guide and provide assistance to develop client's own support team",
    "Improve operational efficiencies through expert guidance",
    "Provide quality resources per client need on short & long term basis",
    "Extend backend technical support whenever needed"
  ];

  return (
    <section className="our-approach" id="approach">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Approach & Values</h2>
          <p>What Proahead Technologies Has Accomplished</p>
        </div>

        <div className="approach-grid" data-aos="fade-up" data-aos-delay="200">
          {approaches.map((item, index) => (
            <div 
              className="approach-card" 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={100 * index}
            >
              <div className="approach-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="philosophy-section" data-aos="fade-up" data-aos-delay="400">
          <h2>Our Philosophy</h2>
          <div className="philosophy-content">
            <p>
              We believe in transforming ideas into experience through leading edge technology 
              expertise and business domain knowledge. The company offers solutions and services 
              that span the range of Reporting & Analysis, Enterprise Application, and User Experience.
            </p>
            <p>
              We have built the company with an emphasis on process and methodology that enables 
              us to deliver repeatable results of high quality to our clients.
            </p>
            <p>
              We initiate with listening, learning, and understanding customer's business requirements, 
              its operations, systems, and objectives. With that comprehension, we work to anticipate 
              your needs and tailor our approach, and craft solutions to fulfill them.
            </p>
            <p>
              At Proahead Technologies, we determine success by results. We deliver solutions which 
              are well equipped and specifically configured to transform requirements into meaningful 
              results and deliver tangible business value. We keep our commitments and abide by project timelines.
            </p>
          </div>
        </div>

        <div className="capabilities-section" data-aos="fade-up" data-aos-delay="600">
          <h3>Our Key Capabilities</h3>
          <div className="capabilities-list">
            {capabilities.map((capability, index) => (
              <div className="capability-item" key={index}>
                <CheckCircleIcon sx={{ color: '#0066cc', fontSize: '1.5rem' }} />
                <span>{capability}</span>
              </div>
            ))}
          </div>
          <div className="focus-statement">
            <p>
              <strong>Our Conscious Strategy:</strong> Focus on Technology Skills ensures that our teams 
              have strong Subject Matter Expertise in our area of operations, leading to better quality 
              deliverables. When it comes to service offerings, we are driven by the motto of 
              <em> "Doing Less but Doing Well"</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
