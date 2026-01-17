// src/components/RatingBadge.jsx
import React from 'react';
import './ratingBadge.css';

const RatingBadge = ({ value }) => {
    // Jika null/undefined, tampilkan "–"
    if (value == null) {
        return (
            <div className="rating-badge">
                <span className="rating-value">0.0</span>
            </div>
        );
    }

    const safeValue = Math.min(10, Math.max(0, parseFloat(value)));

    return (
        <div className="rating-badge">
            <span className="star">★</span>
            <span className="rating-value">{safeValue.toFixed(1)}</span>
        </div>
    );
};

export default RatingBadge;
