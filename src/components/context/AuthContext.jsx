import React, { createContext, useContext, useEffect, useState } from 'react';
import apiClient from '../../api/ApiClient';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    // Fungsi untuk menyimpan token di localStorage
    const saveToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
        // Atur header default axios
        apiClient.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${newToken}`;
    };

    // Fungsi untuk menghapus token
    const removeToken = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        delete apiClient.defaults.headers.common['Authorization'];
    };

    // Cek apakah token valid dan ambil data user
    const checkAuthStatus = async () => {
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const res = await apiClient.get('/user/me');
            setUser(res.data);
        } catch (error) {
            console.error('Auth check failed:', error);
            removeToken();
        } finally {
            setLoading(false);
        }
    };

    // Fungsi login
    const login = async (email, password) => {
        try {
            const res = await apiClient.post('/login', { email, password });
            const newToken = res.data.token;

            saveToken(newToken);

            // Ambil data user langsung setelah login
            const userRes = await apiClient.get('/user/me');
            setUser(userRes.data);

            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login gagal',
            };
        }
    };

    // Fungsi logout
    const logout = () => {
        removeToken();
    };

    // Set header default jika token ada
    useEffect(() => {
        if (token) {
            apiClient.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${token}`;
        } else {
            delete apiClient.defaults.headers.common['Authorization'];
        }
    }, [token]);

    // Cek status auth saat aplikasi dimuat
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const value = {
        user,
        token,
        loading,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
