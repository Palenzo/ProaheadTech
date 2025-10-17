import React, { useState, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className={`toggle-track ${darkMode ? 'dark' : 'light'}`}>
        <div className="toggle-thumb">
          {darkMode ? (
            <DarkModeIcon sx={{ fontSize: 18, color: '#fff' }} />
          ) : (
            <LightModeIcon sx={{ fontSize: 18, color: '#ffc107' }} />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
