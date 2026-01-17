import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../features/auth/context/AuthContext'; // ❗ Import useAuth
import './loginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // ❗ Ambil fungsi login dari context

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // ❗ Gunakan fungsi login dari AuthContext
        const result = await login(email, password);

        if (result.success) {
            navigate('/'); // Arahkan ke home setelah login
        } else {
            setError(result.message || 'Invalid email or password');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h1>Sign In</h1>
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
                <span>or use your email password</span>

                <form className="login-form" onSubmit={handleSubmit}>
                    {error && (
                        <p style={{ color: 'red', fontSize: '12px' }}>
                            {error}
                        </p>
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <a href="#">Forget Your Password?</a>
                    <button type="submit">Sign In</button>
                </form>

                <div className="login-footer">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
