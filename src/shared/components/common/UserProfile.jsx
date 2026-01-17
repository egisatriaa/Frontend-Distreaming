import { useState, useRef, useEffect } from 'react';
import './userProfile.css';

export default function UserProfile({ user, onLogout }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggle = () => setOpen(!open);

    // close dropdown jika klik di luar
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="user-profile" ref={dropdownRef}>
            <button className="user-profile-btn" onClick={toggle}>
                <div className="avatar">
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div className="user-info">
                    <span className="username">{user.username}</span>
                    <span className="role">{user.role}</span>
                </div>

                <ion-icon
                    className={`arrow ${open ? 'open' : ''}`}
                    name="chevron-down-outline"
                ></ion-icon>
            </button>

            {open && (
                <div className="user-dropdown">
                    <div className="dropdown-header">
                        <strong>{user.username}</strong>
                        <small>{user.email}</small>
                    </div>

                    <button className="dropdown-item">
                        <ion-icon name="person-circle-outline"></ion-icon>
                        Profile
                    </button>

                    <button className="dropdown-item logout" onClick={onLogout}>
                        <ion-icon name="log-out-outline"></ion-icon>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
