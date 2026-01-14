import React from 'react';
import './card.css';

function Card({ movie }) {
    const duration = movie.duration_minutes;

    const categories =
        movie.categories
            ?.slice(0, 2) // ambil max 2
            .map((cat) => cat.name)
            .join(', ') || 'Unknown';

    return (
        <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="movie-card">
                <img
                    src={movie.preview_img}
                    alt="Preview Image"
                    className="img-fluid"
                />
                <p>
                    {duration} min | {categories}
                </p>
                <div className="content">
                    <h4>{movie.title}</h4>
                    <div className="card-icons">
                        <ion-icon name="add-outline"></ion-icon>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
