import { Link } from 'react-router-dom';
import './button.css';

function Button({
    icon,
    name,
    to = '#',
    color = '#fff',
    bgColor = '#ff3700',
    onClick,
    className = '',
}) {
    if (onClick) {
        return (
            <button
                className={`mainBtn ${className}`}
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
            className={`mainBtn ${className}`}
            style={{ color, backgroundColor: bgColor }}
        >
            {icon}
            {name}
        </Link>
    );
}

export default Button;
