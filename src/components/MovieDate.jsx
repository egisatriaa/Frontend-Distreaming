import React from 'react';
import './movieDate.css';
import { getDayWithSuffix } from '../utils/dateFormate';

function MovieDate({ movie, isActive }) {
    if (!movie?.release_date) return null;

    const date = new Date(movie.release_date);

    const dayWithSuffix = getDayWithSuffix(date);
    const month = date.toLocaleDateString('en-GB', {
        month: 'long',
    });

    return (
        <div className={`date ${isActive ? 'active' : ''}`}>
            <h2>
                On {dayWithSuffix} {month}
            </h2>
        </div>
    );
}

export default MovieDate;
