import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Hardcoded credentials
    if (credentials.username === 'proprops' && credentials.password === 'reprops') {
      localStorage.setItem('adminLoggedIn', 'true');
      onLogin(true);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <LockIcon sx={{ fontSize: '3rem', color: 'var(--primary-color)' }} />
            <h2>Admin Portal</h2>
            <p>Proahead Technologies</p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Username</label>
              <div className="input-wrapper">
                <PersonIcon className="input-icon" />
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <LockIcon className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-login">
              Login to Dashboard
            </button>
          </form>

          <div className="login-footer">
            <p>© 2025 Proahead Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
