// src/components/Button.jsx
import React from 'react';
import './index.css';

const Button = ({ label, icon }) => {
    return (
        <button className="button">
            {icon && <span className="icon">{icon}</span>}
            {label}
        </button>
    );
};

export default Button;
