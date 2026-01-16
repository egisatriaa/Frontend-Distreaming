import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({
    children,
    allowedRoles = ['user', 'admin'],
    redirectTo = '/login',
}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>; // Tampilkan loading sementara
    }

    if (!user) {
        // Jika tidak login, arahkan ke login
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Jika role tidak diizinkan, arahkan ke halaman utama atau forbidden
        return <Navigate to="/" replace />;
    }

    // Jika user login dan role diizinkan, render children
    return children;
};

export default PrivateRoute;
