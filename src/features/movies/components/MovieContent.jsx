import React from 'react';
import './movieContent.css';
import Button from '../../../shared/components/common/Button';

function MovieContent({ movie, isActive }) {
    if (!movie) return null;

    return (
        <div className={`content ${isActive ? 'active' : ''}`}>
            <img
                src={movie.title_img}
                alt={movie.title}
                className="movie-title"
            />

            <h4>
                <span>{movie.release_year}</span>
                <span>
                    <i>{movie.age_limit}</i>
                </span>
                <span>{movie.duration_minutes} min</span>
                <span>
                    {movie.categories?.map((cat) => cat.name).join(', ')}
                </span>
            </h4>

            <p>{movie.description}</p>

            <div className="button">
                <Button
                    icon={<ion-icon name="bookmark-outline"></ion-icon>}
                    name="Book"
                    color="#ff3700"
                    bgColor="#ffffff"
                />
                <Button
                    icon={<ion-icon name="add-outline"></ion-icon>}
                    name="My List"
                />
            </div>
        </div>
    );
}

export default MovieContent;
