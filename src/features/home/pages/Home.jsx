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
import TopRatedMovies from '../components/TopRatedMovies';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const fetchAllMovies = async () => {
            try {
                const res = await apiClient.get('/guest/movies', {
                    params: { per_page: 10 },
                });

                if (!mounted) return;

                setMovies(res.data.data || []);

                requestAnimationFrame(() => {
                    if (mounted) setLoading(false);
                });
            } catch (err) {
                console.error(err);
                if (mounted) setLoading(false);
            }
        };

        fetchAllMovies();

        return () => {
            mounted = false;
        };
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header />
            <Banner movies={movies} />
            <TopRatedMovies />
            <OpeningThisWeek movies={movies} />
            <Footer />
        </>
    );
}

export default Home;
