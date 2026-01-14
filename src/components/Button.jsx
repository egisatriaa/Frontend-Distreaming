import React from 'react';
import './button.css';

function Button({ icon, name, color = '#ffffff', bgColor = '#ff3700' }) {
    return (
        <a
            href="#"
            className="mainBtn"
            style={{ color: color, backgroundColor: bgColor }}
        >
            {icon}
            {name}
        </a>
    );
}

export default Button;
