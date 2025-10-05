import React from 'react';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision" id="mission-vision">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Mission & Vision</h2>
          <p>Driving digital transformation with purpose</p>
        </div>

        <div className="mv-grid">
          <div className="mv-card mission-card" data-aos="fade-right">
            <div className="mv-icon">
              <TrackChangesIcon sx={{ fontSize: 64, color: '#0066cc' }} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower organizations with innovative ERP and IT solutions that enhance efficiency, 
              reduce costs, and enable sustainable growth.
            </p>
            <div className="mv-decoration"></div>
          </div>

          <div className="mv-card vision-card" data-aos="fade-left">
            <div className="mv-icon">
              <RocketLaunchIcon sx={{ fontSize: 64, color: '#00a8e8' }} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be recognized globally as a trusted ERP & IT solutions partner, known for excellence, 
              reliability, and customer success.
            </p>
            <div className="mv-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
