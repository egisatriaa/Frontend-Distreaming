import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import Home from './features/home/pages/Home';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import MovieDetail from './features/movies/pages/MovieDetail';

// nanti buat halaman khusus admin
import AdminDashboard from './features/Admin/Dashboard';

// Auth
import PrivateRoute from './features/auth/components/PrivateRoute';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* Hanya user dan admin yang bisa akses MovieDetail */}
                    <Route
                        element={
                            <PrivateRoute
                                allowedRoles={['user', 'admin']}
                                redirectTo="/login"
                            />
                        }
                    >
                        <Route path="/movie/:id" element={<MovieDetail />} />
                    </Route>

                    {/* Hanya admin yang bisa akses dashboard admin */}
                    <Route
                        element={
                            <PrivateRoute
                                allowedRoles={['admin']}
                                redirectTo="/"
                            />
                        }
                    >
                        <Route
                            path="/admin/dashboard"
                            element={<AdminDashboard />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
