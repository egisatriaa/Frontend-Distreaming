import React, { useState, useEffect } from 'react';
import apiClient from '../api/ApiClient';
import './schedule.css';
import Card from '../components/Card';
import CategoryFilter from '../components/CategoryFilter';

function Schedule() {
    const [movies, setMovies] = useState([]);
    const MOVIES_PER_PAGE = 25;

    const fetchMovies = async (categoryId = null) => {
        try {
            const res = await apiClient.get('/guest/movies', {
                params: {
                    per_page: MOVIES_PER_PAGE,
                    ...(categoryId ? { category_id: categoryId } : {}),
                },
            });
            setMovies(res.data.data || []);
        } catch (err) {
            console.error('Error fetching movies:', err.response?.data || err);
        }
    };

    // fetch semua movie awal
    useEffect(() => {
        fetchMovies();
    }, []);

    const handleCategorySelect = (category) => {
        if (category === null) {
            // All diklik
            fetchMovies();
        } else {
            fetchMovies(category.id);
        }
    };

    return (
        <section id="schedule" className="schedule">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Opening This Week</h4>
                </div>

                <div className="row">
                    <div className="filters">
                        <CategoryFilter onSelect={handleCategorySelect} />
                    </div>
                </div>

                <div className="row mt-5">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p>No movies available.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Schedule;
