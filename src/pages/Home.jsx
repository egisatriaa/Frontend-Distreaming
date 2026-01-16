// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import '../App.css';

import Header from './Header';
import Banner from './Banner';
import OpeningThisWeek from './OpeningThisWeek';
import Loading from '../components/Loading';
import apiClient from '../api/ApiClient';
import Footer from './Footer';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllMovies = async () => {
        try {
            const res = await apiClient.get('/guest/movies', {
                params: { per_page: 10 },
            });
            console.log(res.data.data);
            setMovies(res.data.data || []);
        } catch (err) {
            console.error('Fetch error:', err);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllMovies();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header />
            <Banner movies={movies} />
            <OpeningThisWeek movies={movies} />
            <Footer />
        </>
    );
}

export default Home;