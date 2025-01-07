import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Import Link for navigation
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/adminbg.png';  // Import the background image

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('http://127.0.0.1:5000/login', { email, password });

            if (response.data.access_token) {
                localStorage.setItem('accessToken', response.data.access_token);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('name', response.data.name);
                navigate('/admin_main');
            } else {
                alert(response.data.message || 'Login failed');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred, please try again');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="login-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,  // Set the imported image as the background
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="login-card" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px' }}>
                <h2 className="login-title" style={{ marginBottom: '20px', textAlign: 'center' }}>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            name="email"
                            className="form-input"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '10px', marginBottom: '15px', width: '100%', borderRadius: '5px' }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="off"
                            name="password"
                            className="form-input"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: '10px', marginBottom: '15px', width: '100%', borderRadius: '5px' }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-button"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                        }}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                
                {/* Add a link to the Admin Register page */}
                <div className="mt-3 text-center">
                    <Link to="/admin_register" className="btn btn-link">
                        Don't have an account? Register here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
