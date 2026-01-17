import React, { createContext, useContext, useEffect, useState } from 'react';
import apiClient from '../../../api/ApiClient';

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

    const saveToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
        apiClient.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${newToken}`;
    };

    const removeToken = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        delete apiClient.defaults.headers.common['Authorization'];
    };

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
            // Jika gagal, hapus token dan set user ke null
            removeToken();
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const res = await apiClient.post('/login', { email, password });
            console.log(res.data);

            //simpan token
            saveToken(res.data.data.token);

            const userRes = await apiClient.get('/user/me');
            console.log('User Data after login:', userRes.data);
            setUser(userRes.data);
            console.log('State user updated to:', userRes.data);

            
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login gagal',
            };
        }
    };

    const logout = () => {
        removeToken();
    };

    useEffect(() => {
        if (token) {
            apiClient.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${token}`;
        } else {
            delete apiClient.defaults.headers.common['Authorization'];
        }
    }, [token]);

    useEffect(() => {
        setLoading(true);
        checkAuthStatus();
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
