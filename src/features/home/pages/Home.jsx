import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import '../../../App.css';

import Header from '../../../shared/components/navigation/Header';
import Banner from '../components/Banner';
import OpeningThisWeek from '../components/OpeningThisWeek';
import Loading from '../../../shared/components/common/Loading';
import apiClient from '../../../api/ApiClient';
import Footer from '../../../shared/components/navigation/Footer';

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
