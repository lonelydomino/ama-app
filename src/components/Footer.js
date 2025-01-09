import React from 'react';
import './Footer.css';  // Import your custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 My Website. All rights reserved.</p>
        <nav>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
