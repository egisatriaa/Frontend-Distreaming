import React, { useState, useEffect } from 'react';
import apiClient from '../../../api/ApiClient';
import './schedule.css';
import Card from '../../../shared/components/ui/Card';
import CategoryFilter from '../../../shared/components/forms/CategoryFilter';
import Button from '../../../shared/components/common/Button';
import Skeleton from '../../../shared/components/common/Skeleton';

function Schedule() {
    const [movies, setMovies] = useState([]);
    const [meta, setMeta] = useState({ current_page: 1, last_page: 1 });
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async (categoryId = null, page = 1) => {
        setLoading(true);
        try {
            const res = await apiClient.get('/guest/movies', {
                params: {
                    per_page: 10,
                    page,
                    ...(categoryId ? { category_id: categoryId } : {}),
                },
            });

            // update semua state sekaligus, jangan ada setState di tengah
            setMovies(res.data.data || []);
            setMeta(res.data.meta || { current_page: 1, last_page: 1 });
            setSelectedCategory(categoryId || null);
        } catch (err) {
            console.error('Error fetching movies:', err.response?.data || err);
            setMovies([]); // fallback agar skeleton hilang
        } finally {
            setLoading(false); // hanya set setelah semua selesai
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleCategorySelect = (category) => {
        const categoryId = category ? category.id : null;
        fetchMovies(categoryId, 1);
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

                <div className="row mt-5 cards-row">
                    {loading && movies.length === 0 ? (
                        Array.from({ length: 10 }).map((_, i) => (
                            <Skeleton key={i} />
                        ))
                    ) : movies.length > 0 ? (
                        movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p>No movies available.</p>
                    )}
                </div>

                {/* Pagination */}
                {meta.last_page > 1 && (
                    <div className="pagination">
                        {/* Prev */}
                        <Button
                        
                            name="Prev"
                            onClick={() =>
                                fetchMovies(
                                    selectedCategory,
                                    meta.current_page - 1,
                                )
                            }
                            disabled={meta.current_page === 1}
                            className="pagination-btn"
                        />

                        {/* Page numbers */}
                        {Array.from(
                            { length: meta.last_page },
                            (_, i) => i + 1,
                        ).map((num) => (
                            <Button
                                key={num}
                                name={num}
                                onClick={() =>
                                    fetchMovies(selectedCategory, num)
                                }
                                className={`pagination-btn ${
                                    meta.current_page === num ? 'active' : ''
                                }`}
                            />
                        ))}

                        {/* Next */}
                        <Button
                            name="Next"
                            onClick={() =>
                                fetchMovies(
                                    selectedCategory,
                                    meta.current_page + 1,
                                )
                            }
                            disabled={meta.current_page === meta.last_page}
                            className="pagination-btn"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

export default Schedule;
