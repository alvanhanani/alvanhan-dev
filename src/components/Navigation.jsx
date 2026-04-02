import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';
import profileImage from '../assets/profile.png';

const Navigation = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container nav-container">
        <a href="#home" className="logo">
          <img src={profileImage} alt="Alvan Hanani" className="logo-image" />
          <span className="logo-text">Alvan<span className="dot">.</span></span>
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
