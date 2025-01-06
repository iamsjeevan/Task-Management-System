import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 // Import the CSS file
import background from '../assets/homeimage.png'; // Import your local background image

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/login',
                { email, password }
            );
            if (response.data.access_token) {
                localStorage.setItem('accessToken', response.data.access_token);
                alert('User logged in successfully');
                navigate('/main');
            } else {
                alert(response.data.message || 'Login failed');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred, please try again');
        }
    };

    return (
        <div 
            className="login-container" 
            style={{
                backgroundImage: `url(${background})`, // Set the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }}
        >
            <div className="login-card">
                <h2 className="login-title">Login</h2>
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
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="login-footer">
                    Don't have an account?{' '}
                    <Link to="/register" className="register-link">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
