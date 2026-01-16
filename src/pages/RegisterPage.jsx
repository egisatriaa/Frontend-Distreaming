// src/pages/RegisterPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/ApiClient';
import './registerPage.css'; // ← import CSS khusus

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await apiClient.post('/register', { name, email, password });
            navigate('/login');
        } catch (err) {
            setError('Registration failed. Email may already be used.');
        }
    };

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href="#" className="icon">
                        <i className="fa-brands fa-google"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                <span>or use your email for registration</span>

                <form className="register-form" onSubmit={handleSubmit}>
                    {error && (
                        <p style={{ color: 'red', fontSize: '12px' }}>
                            {error}
                        </p>
                    )}

                    {/* Baris 1: Name + Email */}

                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    {/* Baris 2: Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {/* Baris 3: Button */}
                    <button type="submit">Sign Up</button>
                </form>

                <div className="register-footer">
                    Already have an account? <Link to="/login">Sign In</Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
