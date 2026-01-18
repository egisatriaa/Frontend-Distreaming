import React from 'react';
import './navListItem.css';

function NavListItem({ nav, activeSection }) {
    const isActive = activeSection === nav.link;

    // SECTION (Top Rated, Schedule)
    if (nav.type === 'section') {
        return (
            <li className="nav-item">
                <a
                    href={`#${nav.link}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                >
                    {nav.name}
                </a>
            </li>
        );
    }

    // ROUTE (Dashboard, Blogs)
    return (
        <li className="nav-item">
            <a
                href={nav.link}
                className={`nav-link ${
                    activeSection === 'dashboard' && nav.link === '/'
                        ? 'active'
                        : ''
                }`}
            >
                {nav.name}
            </a>
        </li>
    );
}

export default NavListItem;
