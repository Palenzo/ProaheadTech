import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Dashboard.css';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    role: '',
    experience: '',
    location: '',
    jobType: '',
    salary: '',
    description: '',
    requirements: '',
    responsibilities: '',
    skills: '',
    department: '',
    postedDate: new Date().toISOString().split('T')[0],
    expiryDate: '',
    status: 'active'
  });

  useEffect(() => {
    // Load jobs from localStorage
    const savedJobs = localStorage.getItem('jobListings');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const generateJobId = () => {
    return 'JOB-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    onLogout(false);
    navigate('/admin/login');
  };

  const handleInputChange = (e) => {
    setJobForm({
      ...jobForm,
      [e.target.name]: e.target.value
    });
  };

  const sendJobNotificationEmail = (job, action) => {
    const templateParams = {
      to_email: 'dharmkritbhagat@gmail.com', // Admin email
      action: action,
      job_id: job.jobId,
      job_title: job.title,
      job_role: job.role,
      experience: job.experience,
      location: job.location,
      job_type: job.jobType,
      salary: job.salary,
      department: job.department,
      posted_date: job.postedDate,
      expiry_date: job.expiryDate,
      status: job.status,
      description: job.description,
      requirements: job.requirements,
      responsibilities: job.responsibilities,
      skills: job.skills,
      application_link: `${window.location.origin}/careers/${job.jobId}`
    };

    // Replace with your EmailJS credentials
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Email error:', error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingJob) {
      // Update existing job
      const updatedJobs = jobs.map(job => 
        job.jobId === editingJob.jobId ? { ...jobForm, jobId: editingJob.jobId } : job
      );
      setJobs(updatedJobs);
      localStorage.setItem('jobListings', JSON.stringify(updatedJobs));
      sendJobNotificationEmail({ ...jobForm, jobId: editingJob.jobId }, 'Updated');
      setEditingJob(null);
    } else {
      // Create new job
      const newJob = {
        ...jobForm,
        jobId: generateJobId()
      };
      const updatedJobs = [...jobs, newJob];
      setJobs(updatedJobs);
      localStorage.setItem('jobListings', JSON.stringify(updatedJobs));
      sendJobNotificationEmail(newJob, 'Created');
    }

    // Reset form
    setJobForm({
      title: '',
      role: '',
      experience: '',
      location: '',
      jobType: '',
      salary: '',
      description: '',
      requirements: '',
      responsibilities: '',
      skills: '',
      department: '',
      postedDate: new Date().toISOString().split('T')[0],
      expiryDate: '',
      status: 'active'
    });
    setShowForm(false);
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setJobForm(job);
    setShowForm(true);
  };

  const handleDelete = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      const jobToDelete = jobs.find(job => job.jobId === jobId);
      const updatedJobs = jobs.filter(job => job.jobId !== jobId);
      setJobs(updatedJobs);
      localStorage.setItem('jobListings', JSON.stringify(updatedJobs));
      sendJobNotificationEmail(jobToDelete, 'Deleted');
    }
  };

  const handleStatusChange = (jobId, newStatus) => {
    const updatedJobs = jobs.map(job => 
      job.jobId === jobId ? { ...job, status: newStatus } : job
    );
    setJobs(updatedJobs);
    localStorage.setItem('jobListings', JSON.stringify(updatedJobs));
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div className="container-wide">
          <div className="header-content">
            <div className="header-left">
              <WorkIcon sx={{ fontSize: '2.5rem', color: 'var(--primary-color)' }} />
              <div>
                <h1>Job Management Dashboard</h1>
                <p>Proahead Technologies - Admin Portal</p>
              </div>
            </div>
            <button onClick={handleLogout} className="btn btn-secondary">
              <LogoutIcon /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container-wide">
          <div className="dashboard-actions">
            <button 
              onClick={() => {
                setShowForm(!showForm);
                setEditingJob(null);
                setJobForm({
                  title: '',
                  role: '',
                  experience: '',
                  location: '',
                  jobType: '',
                  salary: '',
                  description: '',
                  requirements: '',
                  responsibilities: '',
                  skills: '',
                  department: '',
                  postedDate: new Date().toISOString().split('T')[0],
                  expiryDate: '',
                  status: 'active'
                });
              }}
              className="btn btn-primary"
            >
              <AddIcon /> {showForm ? 'Cancel' : 'Create New Job'}
            </button>
            <div className="job-stats">
              <div className="stat-card">
                <span className="stat-number">{jobs.length}</span>
                <span className="stat-label">Total Jobs</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{jobs.filter(j => j.status === 'active').length}</span>
                <span className="stat-label">Active</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{jobs.filter(j => j.status === 'filled').length}</span>
                <span className="stat-label">Filled</span>
              </div>
            </div>
          </div>

          {showForm && (
            <div className="job-form-container">
              <h2>{editingJob ? 'Edit Job Posting' : 'Create New Job Posting'}</h2>
              <form onSubmit={handleSubmit} className="job-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Job Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={jobForm.title}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>
                  <div className="form-group">
                    <label>Role *</label>
                    <input
                      type="text"
                      name="role"
                      value={jobForm.role}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Full Stack Developer"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Experience Required *</label>
                    <input
                      type="text"
                      name="experience"
                      value={jobForm.experience}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., 3-5 years"
                    />
                  </div>
                  <div className="form-group">
                    <label>Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={jobForm.location}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Gurgaon / Remote"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Job Type *</label>
                    <select
                      name="jobType"
                      value={jobForm.jobType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Salary Range</label>
                    <input
                      type="text"
                      name="salary"
                      value={jobForm.salary}
                      onChange={handleInputChange}
                      placeholder="e.g., ₹8-12 LPA"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Department</label>
                    <input
                      type="text"
                      name="department"
                      value={jobForm.department}
                      onChange={handleInputChange}
                      placeholder="e.g., Engineering, HR, Sales"
                    />
                  </div>
                  <div className="form-group">
                    <label>Expiry Date *</label>
                    <input
                      type="date"
                      name="expiryDate"
                      value={jobForm.expiryDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Job Description *</label>
                  <textarea
                    name="description"
                    value={jobForm.description}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Provide a detailed job description..."
                  />
                </div>

                <div className="form-group">
                  <label>Requirements *</label>
                  <textarea
                    name="requirements"
                    value={jobForm.requirements}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="List job requirements (separate with line breaks)..."
                  />
                </div>

                <div className="form-group">
                  <label>Responsibilities *</label>
                  <textarea
                    name="responsibilities"
                    value={jobForm.responsibilities}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="List key responsibilities (separate with line breaks)..."
                  />
                </div>

                <div className="form-group">
                  <label>Required Skills *</label>
                  <textarea
                    name="skills"
                    value={jobForm.skills}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    placeholder="List required skills (separate with commas)..."
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    {editingJob ? 'Update Job' : 'Create Job'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => {
                      setShowForm(false);
                      setEditingJob(null);
                    }}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="jobs-list">
            <h2>Job Listings ({jobs.length})</h2>
            {jobs.length === 0 ? (
              <div className="no-jobs">
                <WorkIcon sx={{ fontSize: '4rem', opacity: 0.3 }} />
                <p>No job postings yet. Create your first job posting!</p>
              </div>
            ) : (
              <div className="jobs-grid">
                {jobs.map((job) => (
                  <div key={job.jobId} className={`job-card ${job.status}`}>
                    <div className="job-header">
                      <div>
                        <h3>{job.title}</h3>
                        <p className="job-id">Job ID: {job.jobId}</p>
                      </div>
                      <span className={`status-badge ${job.status}`}>
                        {job.status}
                      </span>
                    </div>
                    <div className="job-details">
                      <p><strong>Role:</strong> {job.role}</p>
                      <p><strong>Experience:</strong> {job.experience}</p>
                      <p><strong>Location:</strong> {job.location}</p>
                      <p><strong>Type:</strong> {job.jobType}</p>
                      {job.salary && <p><strong>Salary:</strong> {job.salary}</p>}
                      <p><strong>Posted:</strong> {job.postedDate}</p>
                      <p><strong>Expires:</strong> {job.expiryDate}</p>
                    </div>
                    <div className="job-actions">
                      <button
                        onClick={() => handleEdit(job)}
                        className="btn-icon btn-edit"
                        title="Edit"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={() => navigate(`/careers/${job.jobId}`)}
                        className="btn-icon btn-view"
                        title="View"
                      >
                        <VisibilityIcon />
                      </button>
                      <select
                        value={job.status}
                        onChange={(e) => handleStatusChange(job.jobId, e.target.value)}
                        className="status-select"
                      >
                        <option value="active">Active</option>
                        <option value="filled">Filled</option>
                        <option value="expired">Expired</option>
                        <option value="closed">Closed</option>
                      </select>
                      <button
                        onClick={() => handleDelete(job.jobId)}
                        className="btn-icon btn-delete"
                        title="Delete"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
