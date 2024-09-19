import React from 'react';
import '../styles/nav-bar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search..." />
      <div className="icons">
        <i className="search-icon">🔍</i>
        <i className="notification-icon">🔔</i>
      </div>
    </div>
  );
};

export default Navbar;
