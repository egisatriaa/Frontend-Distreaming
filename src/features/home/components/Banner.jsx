import { useState } from 'react';
import './banner.css';
import MovieContent from '../../movies/components/MovieContent';
import MovieDate from '../../movies/components/MovieDate';
import PlayBtn from '../../../shared/components/ui/PlayBtn';
import MovieSwiper from '../../movies/components/MovieSwiper';

function Banner({ movies }) {
    const [activeMovie, setActiveMovie] = useState(movies[0] || null);
    const [showContent, setShowContent] = useState(true);

    const handleSlideChange = (index) => {
        if (!movies[index]) return;

        setShowContent(false);
        setTimeout(() => {
            setActiveMovie(movies[index]);
            setShowContent(true);
        }, 300);
    };

    if (!movies.length) return null;

    return (
        <div className="banner">
            {activeMovie && (
                <img
                    src={activeMovie.bg_img}
                    alt={activeMovie.title}
                    className="bgImg active"
                />
            )}

            <div className="movie">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <MovieContent
                                movie={activeMovie}
                                isActive={showContent}
                            />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <MovieDate
                                movie={activeMovie}
                                isActive={showContent}
                            />
                            <PlayBtn
                                movie={activeMovie}
                                isActive={showContent}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <MovieSwiper slides={movies} slideChange={handleSlideChange} />
        </div>
    );
}

export default Banner;
