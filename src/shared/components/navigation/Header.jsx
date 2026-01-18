import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../features/auth/context/AuthContext';
import navListData from '../../utils/navListData';
import NavListItem from './NavListItem';
import Search from '../forms/Search';
import Button from '../../../shared/components/common/Button';
import UserProfile from '../common/UserProfile';
import './header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');

    const { user, logout } = useAuth();

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['top-rated', 'schedule'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.2,
                rootMargin: '-120px 0px -50% 0px',
            },
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <Link to="/" className="logo">
                DiStreaming
            </Link>
            <ul className="nav">
                {navListData.map((nav) => (
                    <NavListItem
                        key={nav._id}
                        nav={nav}
                        activeSection={activeSection}
                    />
                ))}
            </ul>
            <Search />

            {/* Jika user login, tampilkan profil */}
            {user ? (
                <UserProfile user={user} onLogout={logout} />
            ) : (
                // Jika belum login, tampilkan Sign In
                <Button
                    icon={<ion-icon name="person-outline"></ion-icon>}
                    name="Sign In"
                    to="/login"
                />
            )}
        </header>
    );
}

export default Header;
