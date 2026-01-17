// src/components/Search.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../../api/ApiClient';
import './search.css';

function Search({ placeholder = 'Search movies...', debounceDelay = 500 }) {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [loading, setLoading] = useState(false);
    const dropdownRef = useRef(null);

    // Tutup dropdown saat klik di luar
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Fetch live search
    useEffect(() => {
        const query = inputValue.trim();

        if (!query) {
            setResults([]);
            setShowDropdown(false);
            return;
        }

        const handler = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await apiClient.get('/guest/movies', {
                    params: { search: query, per_page: 5 },
                });
                const data = res.data.data || [];
                setResults(data);
                setShowDropdown(true);
            } catch (err) {
                console.error('Search error:', err);
                setResults([]);
            } finally {
                setLoading(false);
            }
        }, debounceDelay);

        return () => clearTimeout(handler);
    }, [inputValue, debounceDelay]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSelect = () => {
        setInputValue('');
        setShowDropdown(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Opsional: arahkan ke halaman pencarian, atau biarkan seperti sekarang
        }
    };

    return (
        <div className="search-container" ref={dropdownRef}>
            <div className="search">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => inputValue && setShowDropdown(true)}
                />
                <ion-icon name="search-outline"></ion-icon>
            </div>

            {/* Dropdown hasil pencarian */}
            {showDropdown && (
                <div className="search-dropdown">
                    {loading ? (
                        <div className="search-item">Searching...</div>
                    ) : results.length > 0 ? (
                        results.map((movie) => (
                            <Link
                                to={`/movie/${movie.id}`}
                                key={movie.id}
                                className="search-item"
                                onClick={handleSelect}
                            >
                                <img
                                    src={movie.preview_img}
                                    alt={movie.title}
                                    className="search-poster"
                                />
                                <span>{movie.title}</span>
                            </Link>
                        ))
                    ) : (
                        <div className="search-item">No movies found</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
