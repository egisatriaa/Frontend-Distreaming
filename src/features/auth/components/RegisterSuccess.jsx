import { Link } from 'react-router-dom';
import './registerSuccess.css';

function RegisterSuccess() {
    return (
        <div className="register-success-wrapper">
            <div className="register-success-card">
                <div className="success-icon">✓</div>

                <h1>Registrasi Berhasil</h1>
                <p>
                    Akun kamu berhasil dibuat.
                    <br />
                    Silakan login untuk melanjutkan.
                </p>

                <Link to="/login" className="login-button">
                    Login Sekarang
                </Link>
            </div>
        </div>
    );
}

export default RegisterSuccess;
