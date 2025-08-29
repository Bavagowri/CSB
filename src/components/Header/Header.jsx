import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/web-logo/logo3.png';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className='logo-section'>
          <img src={logo} className='header-logo-img'alt='csb'/>
          {/* <h1 className="header-logo-title">Commonwealth Speakers Bureau</h1> */}
        </div>
        <nav className="header-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'header-link header-link-active' : 'header-link'}>Home</NavLink>
          <NavLink to="/speakers" className={({ isActive }) => isActive ? 'header-link header-link-active' : 'header-link'}>Find A Speaker</NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'header-link header-link-active' : 'header-link'}>Contact Us</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'header-link header-link-active' : 'header-link'}>About</NavLink>
          {/* <button className="header-button">Custom Proposal</button> */}
          <Link to={'/custom-proposal'} className="header-button">
            Custom Proposal
          </Link>
          {/* <Link to={'/custom-proposal'} className="header-btn1">
            Become a Speaker
          </Link> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;