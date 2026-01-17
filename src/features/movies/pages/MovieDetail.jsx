// src/pages/MovieDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../../../api/ApiClient';
import Loading from '../../../shared/components/common/Loading';
import Button from '../../../shared/components/common/Button';
import Header from '../../../shared/components/navigation/Header';
import './MovieDetail.css';

function MovieDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('overview'); // default tab

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await apiClient.get(`/user/movies/${id}`);
                console.log(response.data);
                setMovie(response.data.data);
            } catch (err) {
                console.error('Fetch movie error:', err);
                if (err.response?.status === 401) {
                    localStorage.removeItem('auth_token');
                    navigate('/login', { replace: true });
                } else if (err.response?.status === 404) {
                    setError('Movie not found');
                } else {
                    setError('Failed to load movie details');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id, navigate]);

    if (loading) return <Loading />;
    if (error) return <div className="error">{error}</div>;

    return (
        <>
            <Header />
            <div className="movie-detail">
                {/* Container utama: 2 kolom */}
                <div className="movie-detail-container">
                    {/* Kolom Kiri: Poster */}
                    <div className="poster-column">
                        <img
                            src={
                                (movie.preview_img || '').trim() ||
                                '/placeholder.jpg'
                            }
                            alt={movie.title}
                            className="movie-poster"
                        />
                    </div>

                    {/* Kolom Kanan: Info & Tabs */}
                    <div className="info-column">
                        <h1>{movie.title}</h1>
                        <div className="movie-meta">
                            <span className="rating">
                                {movie.rating?.avg
                                    ? `${movie.rating.avg} ★`
                                    : '—'}
                            </span>
                            <span className="duration">
                                {movie.duration_minutes}m
                            </span>
                            <span className="year">{movie.release_year}</span>
                            <span className="age-limit">{movie.age_limit}</span>
                        </div>
                        <p className="description">{movie.description}</p>
                        <div className="movie-actions">
                            <Button
                                name=" Play"
                                icon={<ion-icon name="play"></ion-icon>}
                                bgColor="#e50914"
                                color="#fff"
                                onClick={() => console.log('Play clicked')}
                            />
                            <Button
                                name=" My List"
                                icon={<span>+</span>}
                                bgColor="#615e5e"
                                color="#fff"
                                style={{ border: '2px solid white' }}
                                onClick={() => console.log('Add to My List')}
                                className="my-list"
                            />
                        </div>

                        {/* Tabs */}
                        <div className="movie-tabs">
                            <button
                                className={`tab ${
                                    activeTab === 'overview' ? 'active' : ''
                                }`}
                                onClick={() => setActiveTab('overview')}
                            >
                                OVERVIEW
                            </button>
                            <button
                                className={`tab ${
                                    activeTab === 'trailers' ? 'active' : ''
                                }`}
                                onClick={() => setActiveTab('trailers')}
                            >
                                TRAILERS & MORE
                            </button>
                            <button
                                className={`tab ${
                                    activeTab === 'related' ? 'active' : ''
                                }`}
                                onClick={() => setActiveTab('related')}
                            >
                                MORE LIKE THIS
                            </button>
                            <button
                                className={`tab ${
                                    activeTab === 'details' ? 'active' : ''
                                }`}
                                onClick={() => setActiveTab('details')}
                            >
                                DETAILS
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="tab-content">
                            {activeTab === 'overview' && (
                                <div className="tab-pane">
                                    <h3>Overview</h3>
                                    <p>{movie.description}</p>
                                </div>
                            )}

                            {activeTab === 'trailers' && (
                                <div className="tab-pane">
                                    <h3>Trailers & More</h3>
                                    {movie.trailer_url ? (
                                        <div className="trailer-container">
                                            <iframe
                                                width="100%"
                                                height="400"
                                                src={(
                                                    movie.trailer_url || ''
                                                ).trim()}
                                                title="Trailer"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <p>No trailer available.</p>
                                    )}
                                </div>
                            )}

                            {activeTab === 'related' && (
                                <div className="tab-pane">
                                    <h3>More Like This</h3>
                                    <div className="related-movies">
                                        {[...Array(4)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="related-movie"
                                            >
                                                <img
                                                    src={`/placeholder-${
                                                        i + 1
                                                    }.jpg`}
                                                    alt="Related Movie"
                                                    className="related-poster"
                                                />
                                                <p>Related Movie {i + 1}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'details' && (
                                <div className="tab-pane">
                                    <h3>Details</h3>
                                    <ul>
                                        <li>
                                            <strong>Release Date:</strong>{' '}
                                            {movie.release_date.split('T')[0]}
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>{' '}
                                            {movie.categories
                                                .map((c) => c.name)
                                                .join(', ') || 'N/A'}
                                        </li>
                                        <li>
                                            <strong>Type:</strong> {movie.type}
                                        </li>
                                        <li>
                                            <strong>Age Limit:</strong>{' '}
                                            {movie.age_limit}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;
