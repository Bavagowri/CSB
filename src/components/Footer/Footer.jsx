import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/web-logo/logo3.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} className='header-logo-img'alt='csb'/>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-links">
            <li><NavLink to="/find-a-speaker" className="footer-link">Find a Speaker</NavLink></li>
            <li><NavLink to="/keynote-speakers" className="footer-link">Keynote Speakers</NavLink></li>
            <li><NavLink to="/topics-types" className="footer-link">Topics & Types</NavLink></li>
            <li><NavLink to="/about" className="footer-link">About</NavLink></li>
            <li><NavLink to="/contact-us" className="footer-link">Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Contact</h3>
          <p className="footer-contact">Phone: <a href="tel:202-751-3825">202-751-3825</a></p>
          <p className="footer-contact">Email: <a href="mailto:info@wsb.com">info@wsb.com</a></p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <div className="footer-social">
            <a href="https://facebook.com" className="footer-social-link" aria-label="Facebook">
              <span className="social-icon">Facebook</span>
            </a>
            <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter">
              <span className="social-icon">Twitter</span>
            </a>
            <a href="https://linkedin.com" className="footer-social-link" aria-label="LinkedIn">
              <span className="social-icon">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <span>CSB</span>
          <span className="footer-sublogo">Commonwealth Speakers Bureau</span>
        </div>
        <p className="footer-copyright">
          © 2025 Commonwealth Speakers Bureau. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;