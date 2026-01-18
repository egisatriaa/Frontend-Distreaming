import React, { useEffect, useState } from 'react';
import apiClient from '../../../api/ApiClient';
import Card from '../../../shared/components/ui/Card';
import Skeleton from '../../../shared/components/common/Skeleton';
import Button from '../../../shared/components/common/Button';
import './topRatedSchedule.css';

function TopRatedSchedule() {
    const [movies, setMovies] = useState([]);
    const [meta, setMeta] = useState({ current_page: 1, last_page: 1 });
    const [loading, setLoading] = useState(true);

    const fetchTopRatedMovies = async (page = 1) => {
        setLoading(true);
        try {
            const res = await apiClient.get('/guest/movies/top-rated', {
                params: {
                    per_page: 10,
                    page,
                    min_rating: 8, // opsional, default backend juga 8
                },
            });

            setMovies(res.data.data || []);
            setMeta(res.data.meta || { current_page: 1, last_page: 1 });
        } catch (err) {
            console.error('Error fetching top rated movies:', err);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTopRatedMovies();
    }, []);

    return (
        <section id="top-rated" className="schedule">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Top Rated Movies</h4>
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
                        <p>No top rated movies available.</p>
                    )}
                </div>

                {/* Pagination */}
                {meta.last_page > 1 && (
                    <div className="pagination">
                        <Button
                            name="Prev"
                            onClick={() =>
                                fetchTopRatedMovies(meta.current_page - 1)
                            }
                            bgColor={
                                meta.current_page === 1 ? '#ccc' : '#ff3700'
                            }
                            color={meta.current_page === 1 ? '#666' : '#fff'}
                        />

                        {Array.from(
                            { length: meta.last_page },
                            (_, i) => i + 1,
                        ).map((num) => (
                            <Button
                                key={num}
                                name={num}
                                onClick={() => fetchTopRatedMovies(num)}
                                bgColor={
                                    meta.current_page === num
                                        ? '#007bff'
                                        : '#ff3700'
                                }
                            />
                        ))}

                        <Button
                            name="Next"
                            onClick={() =>
                                fetchTopRatedMovies(meta.current_page + 1)
                            }
                            bgColor={
                                meta.current_page === meta.last_page
                                    ? '#ccc'
                                    : '#ff3700'
                            }
                            color={
                                meta.current_page === meta.last_page
                                    ? '#666'
                                    : '#fff'
                            }
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

export default TopRatedSchedule;
