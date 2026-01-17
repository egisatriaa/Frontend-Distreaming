import React from 'react';
import { Link } from 'react-router-dom';
import RatingBadge from './RatingBadge';
import './card.css';

function Card({ movie }) {
    const duration = movie.duration_minutes;

    const categories =
        movie.categories
            ?.slice(0, 2)
            .map((cat) => cat.name)
            .join(', ') || 'Unknown';

    // Ambil langsung avg (skala 1–10)
    const avgRating = movie.rating?.avg; // bisa null atau angka

    return (
        <div className="movie-card">
            <div className="image-wrapper">
                <img
                    src={movie.preview_img}
                    alt={movie.title || 'Movie preview'}
                    className="img-fluid"
                />
                <RatingBadge value={avgRating} />
            </div>

            <p>
                {duration} min | {categories}
            </p>

            <div className="content">
                <h4>{movie.title}</h4>
                <div className="card-icons">
                    {/* Link ke detail film */}
                    <Link to={`/movie/${movie.id}`} className="icon-link">
                        <ion-icon name="add-outline"></ion-icon>
                    </Link>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}

export default Card;
