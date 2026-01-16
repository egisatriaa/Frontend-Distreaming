import { Link } from 'react-router-dom';
import './button.css';

function Button({
    icon,
    name,
    to = '#',
    color = '#fff',
    bgColor = '#ff3700',
    onClick,
}) {
    // jika ada onClick, pakai button biasa, jika tidak, pakai Link
    if (onClick) {
        return (
            <button
                className="mainBtn"
                style={{ color, backgroundColor: bgColor }}
                onClick={onClick}
            >
                {icon}
                {name}
            </button>
        );
    }

    return (
        <Link
            to={to}
            className="mainBtn"
            style={{ color, backgroundColor: bgColor }}
        >
            {icon}
            {name}
        </Link>
    );
}

export default Button;
