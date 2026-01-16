import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navListData from '../utils/navListData';
import NavListItem from '../components/NavListItem';
import Search from '../components/Search';
import './header.css';
import Button from '../components/Button';
import useSearchStore from '../utils/useSearchStore';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { clearSearch } = useSearchStore();
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleLogoClick = () => {
        clearSearch();
        // navigate('/') sudah otomatis karena <Link>
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <Link to="/" className="logo">
                DiStreaming
            </Link>
            <ul className="nav">
                {navListData.map((nav) => (
                    <NavListItem key={nav._id} nav={nav} />
                ))}
            </ul>
            <Search />
            <Button
                icon={<ion-icon name="person-outline"></ion-icon>}
                name="Sign In"
                to="/login"
            />
        </header>
    );
}

export default Header;
