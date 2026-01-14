import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import './App.css';

import Header from './pages/Header';
import Banner from './pages/Banner';
import OpeningThisWeek from './pages/OpeningThisWeek';
import Loading from './components/Loading';
import apiClient from './api/ApiClient';
import Footer from './pages/Footer';

function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const fetchMovies = async () => {
        try {
            const [res] = await Promise.all([
                apiClient.get('/guest/movies'),
                delay(3000),
            ]);
            const respons = res.data;
            console.log(respons);
            const data = res.data.data;
            console.log(data);
            setMovies(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <Header />
            <Banner movies={movies} />
            <OpeningThisWeek movies={movies} />
            <Footer />
        </>
    );
}

export default App;
