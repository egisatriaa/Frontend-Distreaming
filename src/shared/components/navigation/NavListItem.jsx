import { NavLink } from 'react-router-dom';
import React from 'react';
import './navListItem.css';

function NavListItem({ nav, activeSection }) {
    // 🔥 CASE 1: SECTION (Schedule)
    if (nav.type === 'section') {
        return (
            <li className="nav-item">
                <a
                    href={`#${nav.link}`}
                    className={`nav-link ${
                        activeSection === nav.link ? 'active' : ''
                    }`}
                >
                    {nav.name}
                </a>
            </li>
        );
    }

    // 🔥 CASE 2: DASHBOARD (route "/")
    if (nav.link === '/') {
        const isDashboardActive = activeSection === 'dashboard';

        return (
            <li className="nav-item">
                <NavLink
                    to="/"
                    end
                    className={`nav-link ${isDashboardActive ? 'active' : ''}`}
                >
                    {nav.name}
                </NavLink>
            </li>
        );
    }

    // 🔥 CASE 3: ROUTE BIASA (Trend, Blogs)
    return (
        <li className="nav-item">
            <NavLink
                to={nav.link}
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                {nav.name}
            </NavLink>
        </li>
    );
}

export default NavListItem;
