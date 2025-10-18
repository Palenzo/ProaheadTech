import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './JobDetails.css';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [showApplication, setShowApplication] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    coverLetter: '',
    resume: null
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobListings');
    if (savedJobs) {
      const jobs = JSON.parse(savedJobs);
      const foundJob = jobs.find(j => j.jobId === jobId);
      setJob(foundJob);
    }
  }, [jobId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5242880) {
      alert('File size should be less than 5MB');
      e.target.value = '';
      return;
    }
    setFormData({
      ...formData,
      resume: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const templateParams = {
        to_email: 'dharmkritbhagat@gmail.com',
        job_id: job.jobId,
        job_title: job.title,
        applicant_name: formData.name,
        applicant_email: formData.email,
        applicant_phone: formData.phone,
        experience: formData.experience,
        current_company: formData.currentCompany,
        current_salary: formData.currentSalary,
        expected_salary: formData.expectedSalary,
        notice_period: formData.noticePeriod,
        cover_letter: formData.coverLetter,
        resume_name: formData.resume ? formData.resume.name : 'Not attached'
      };

      // Replace with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_USER_ID'
      );

      alert('Application submitted successfully! We will get back to you soon.');
      setShowApplication(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        currentCompany: '',
        currentSalary: '',
        expectedSalary: '',
        noticePeriod: '',
        coverLetter: '',
        resume: null
      });
    } catch (error) {
      console.error('Error sending application:', error);
      alert('Failed to submit application. Please try again or email directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="job-not-found">
        <WorkIcon sx={{ fontSize: '5rem', opacity: 0.3 }} />
        <h2>Job Not Found</h2>
        <p>The job posting you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/careers')} className="btn btn-primary">
          View All Jobs
        </button>
      </div>
    );
  }

  const isExpired = new Date(job.expiryDate) < new Date();
  const canApply = job.status === 'active' && !isExpired;

  return (
    <div className="job-details-page">
      <div className="container">
        <button onClick={() => navigate('/careers')} className="back-button">
          <ArrowBackIcon /> Back to Careers
        </button>

        <div className="job-details-header">
          <div className="job-title-section">
            <h1>{job.title}</h1>
            <p className="job-role">{job.role}</p>
            <div className="job-meta">
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
            <div className="job-tags">
              <span className={`job-status ${job.status}`}>{job.status}</span>
              {job.department && <span className="job-tag">{job.department}</span>}
              {job.salary && <span className="job-tag">{job.salary}</span>}
            </div>
          </div>
          {canApply && (
            <button 
              onClick={() => setShowApplication(true)}
              className="btn btn-primary btn-apply"
            >
              Apply Now
            </button>
          )}
        </div>

        <div className="job-details-content">
          <div className="job-section">
            <h2>Job Description</h2>
            <p>{job.description}</p>
          </div>

          <div className="job-section">
            <h2>Key Responsibilities</h2>
            <ul>
              {job.responsibilities.split('\n').filter(item => item.trim()).map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>

          <div className="job-section">
            <h2>Requirements</h2>
            <ul>
              {job.requirements.split('\n').filter(item => item.trim()).map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>

          <div className="job-section">
            <h2>Required Skills</h2>
            <div className="skills-list">
              {job.skills.split(',').map((skill, index) => (
                <span key={index} className="skill-badge">{skill.trim()}</span>
              ))}
            </div>
          </div>

          <div className="job-info-box">
            <p><strong>Job ID:</strong> {job.jobId}</p>
            <p><strong>Posted Date:</strong> {new Date(job.postedDate).toLocaleDateString()}</p>
            <p><strong>Application Deadline:</strong> {new Date(job.expiryDate).toLocaleDateString()}</p>
          </div>

          {canApply && (
            <div className="apply-section">
              <button 
                onClick={() => setShowApplication(true)}
                className="btn btn-primary btn-large"
              >
                Apply for this Position
              </button>
            </div>
          )}

          {!canApply && (
            <div className="application-closed">
              <p>Applications for this position are currently closed.</p>
            </div>
          )}
        </div>

        {showApplication && (
          <div className="application-modal">
            <div className="modal-overlay" onClick={() => setShowApplication(false)}></div>
            <div className="modal-content">
              <div className="modal-header">
                <h2>Apply for {job.title}</h2>
                <button onClick={() => setShowApplication(false)} className="close-button">×</button>
              </div>
              <form onSubmit={handleSubmit} className="application-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label>Total Experience *</label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., 3 years"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Current Company</label>
                    <input
                      type="text"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleInputChange}
                      placeholder="Current employer"
                    />
                  </div>
                  <div className="form-group">
                    <label>Notice Period</label>
                    <input
                      type="text"
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      placeholder="e.g., 30 days / Immediate"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Current Salary (LPA)</label>
                    <input
                      type="text"
                      name="currentSalary"
                      value={formData.currentSalary}
                      onChange={handleInputChange}
                      placeholder="e.g., 8 LPA"
                    />
                  </div>
                  <div className="form-group">
                    <label>Expected Salary (LPA)</label>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      placeholder="e.g., 12 LPA"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Cover Letter *</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us why you're a great fit for this role..."
                  />
                </div>

                <div className="form-group">
                  <label>Resume/CV * (PDF, DOC, DOCX - Max 5MB)</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <label htmlFor="resume" className="file-upload-label">
                      <AttachFileIcon />
                      {formData.resume ? formData.resume.name : 'Choose file'}
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setShowApplication(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
