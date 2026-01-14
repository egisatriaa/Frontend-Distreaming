import React, { useState, useEffect } from 'react';
import './playBtn.css';
import Modal from './Modal';

function PlayBtn({ movie, isActive }) {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        console.log('showModal sekarang:', showModal);
    }, [showModal]);

    if (!movie?.trailer_url) return null;

    return (
        <>
            <div
                className={`trailer d-flex align-items-center justify-content-center ${
                    isActive ? 'active' : ''
                }`}
            >
                <a href="#" className="playBtn" onClick={toggleModal}>
                    <ion-icon name="play-outline"></ion-icon>
                </a>
                <p>Watch Trailer</p>
            </div>

            {showModal && (
                <Modal
                    movie={movie}
                    status={showModal}
                    toggleModal={toggleModal}
                />
            )}
        </>
    );
}

export default PlayBtn;
