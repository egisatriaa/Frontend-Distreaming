import React from 'react';
import './skeleton.css';

function Skeleton() {
    return (
        <div className="movie-skeleton">
            <div className="skeleton-poster" />
            <div className="skeleton-title" />
            <div className="skeleton-meta" />
        </div>
    );
}

export default Skeleton;
