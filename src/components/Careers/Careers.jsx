import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobListings');
    if (savedJobs) {
      const allJobs = JSON.parse(savedJobs);
      // Only show active jobs that haven't expired
      const activeJobs = allJobs.filter(job => {
        const isActive = job.status === 'active';
        const notExpired = new Date(job.expiryDate) >= new Date();
        return isActive && notExpired;
      });
      setJobs(activeJobs);
      setFilteredJobs(activeJobs);
    }
  }, []);

  useEffect(() => {
    let filtered = jobs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Type filter
    if (filterType !== 'all') {
      filtered = filtered.filter(job => job.jobType === filterType);
    }

    // Location filter
    if (filterLocation !== 'all') {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(filterLocation.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [searchTerm, filterType, filterLocation, jobs]);

  const locations = ['all', ...new Set(jobs.map(job => job.location))];
  const types = ['all', ...new Set(jobs.map(job => job.jobType))];

  return (
    <div className="careers-page">
      <div className="careers-hero">
        <div className="container">
          <div className="hero-content">
            <WorkIcon sx={{ fontSize: '4rem', color: '#ffffff' }} />
            <h1>Join Our Team</h1>
            <p>Build your career with Proahead Technologies</p>
          </div>
        </div>
      </div>

      <div className="careers-content">
        <div className="container">
          <div className="careers-filters">
            <div className="search-box">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search jobs by title, role, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-controls">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="jobs-count">
            <h2>{filteredJobs.length} {filteredJobs.length === 1 ? 'Position' : 'Positions'} Available</h2>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="no-jobs-found">
              <WorkIcon sx={{ fontSize: '5rem', opacity: 0.3 }} />
              <h3>No positions found</h3>
              <p>
                {jobs.length === 0
                  ? "We don't have any open positions at the moment. Check back soon!"
                  : "Try adjusting your filters or search terms"}
              </p>
            </div>
          ) : (
            <div className="jobs-listing">
              {filteredJobs.map((job) => (
                <Link
                  to={`/careers/${job.jobId}`}
                  key={job.jobId}
                  className="job-listing-card"
                >
                  <div className="job-card-header">
                    <div>
                      <h3>{job.title}</h3>
                      <p className="job-role">{job.role}</p>
                    </div>
                    {job.salary && (
                      <span className="salary-badge">{job.salary}</span>
                    )}
                  </div>
                  <div className="job-card-meta">
                    <span className="meta-item">
                      <WorkIcon /> {job.jobType}
                    </span>
                    <span className="meta-item">
                      <LocationOnIcon /> {job.location}
                    </span>
                    <span className="meta-item">
                      <AccessTimeIcon /> {job.experience}
                    </span>
                  </div>
                  <p className="job-description">{job.description.substring(0, 150)}...</p>
                  <div className="job-card-footer">
                    <div className="job-tags">
                      {job.department && <span className="tag">{job.department}</span>}
                      {job.skills.split(',').slice(0, 3).map((skill, index) => (
                        <span key={index} className="tag">{skill.trim()}</span>
                      ))}
                    </div>
                    <span className="view-details">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
