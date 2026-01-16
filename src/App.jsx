import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import MovieDetail from './pages/MovieDetail';
import PrivateRoute from './components/Auth/PrivateRoute';
import RegisterPage from './pages/RegisterPage';

// nanti buat halaman khusus admin
import AdminDashboard from './pages/Admin/Dashboard';

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
