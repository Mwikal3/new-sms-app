// src/components/Header.jsx
import React from 'react';
import './index.css';

const Header = () => {
    return (
        <header className="header">
            <input type="text" placeholder="Search..." />
            <div className="icons">
                <span className="search-icon">🔍</span>
                <span className="bell-icon">🔔</span>
            </div>
        </header>
    );
};

export default Header;
