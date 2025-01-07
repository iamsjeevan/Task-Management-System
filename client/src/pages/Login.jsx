import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../assets/adminbg.png'; // Import your local background image

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);  // Add a loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/login',  // Your backend login endpoint
                { email, password },
                { withCredentials: true }  // Send cookies with the request
            );

            if (response.data.message === 'Login successful') {
                // Store user info in localStorage (optional, for state persistence)
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('role', response.data.role);

                alert('User logged in successfully');
                navigate('/main');  // Redirect to the main page after login
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
                backgroundImage: `url(${background})`,  // Set the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="login-card" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px' }}>
                <h2 className="login-title" style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
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
                            placeholder="Enter Password"
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
                        disabled={loading}  // Disable button while loading
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className="login-footer" style={{ textAlign: 'center', marginTop: '20px' }}>
                    Don't have an account?{' '}
                    <Link to="/register" className="register-link" style={{ color: '#007bff' }}>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
