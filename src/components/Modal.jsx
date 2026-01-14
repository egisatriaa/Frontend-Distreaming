import React from 'react';
import './modal.css';

function Modal({ movie, status, toggleModal }) {
    if (!movie) return null;
    console.log(movie.trailer_url);

    return (
        <div className={`movieModal ${status ? 'active' : ''}`}>
            {/* CLOSE BUTTON */}
            <a href="#" className="modalClose" onClick={toggleModal}>
                <ion-icon name="close-outline"></ion-icon>
            </a>

            {/* IFRAME */}
            {movie?.trailer_url && (
                <iframe
                    width="1200"
                    height="720"
                    src={movie.trailer_url}
                    title={`${movie.title} | Official Trailer`}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            )}
        </div>
    );
}

export default Modal;
