import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">LWU</div>
          <div className="brand-text">
            <div className="company">Learning With Us</div>
            <div className="tag">English & Self-Development Courses</div>
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/vision-mission">Vision & Mission</NavLink>
          <NavLink to="/products-services">Products & Services</NavLink>
          <button
            className="theme-toggle icon-only"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <svg aria-hidden="true" className="theme-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2.5V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 19V21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M2.5 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M19 12H21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M5.3 5.3L7.1 7.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16.9 16.9L18.7 18.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16.9 7.1L18.7 5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M5.3 18.7L7.1 16.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="theme-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.5 14.1C19.6 14.5 18.6 14.8 17.5 14.8C13.7 14.8 10.7 11.8 10.7 8C10.7 6.9 11 5.9 11.4 5C7.4 5.3 4.2 8.6 4.2 12.7C4.2 17 7.7 20.5 12 20.5C16.1 20.5 19.4 17.3 19.7 13.3C19.4 13.6 19.9 13.9 20.5 14.1Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
