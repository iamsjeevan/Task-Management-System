import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Import the CSS file
import background from '../assets/homeimage.png'; // Import your local background image

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
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
                setSuccess('User logged in successfully');
                setError('');
                navigate('/main');
            } else {
                setError(response.data.message || 'Login failed');
                setSuccess('');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred, please try again');
            setSuccess('');
        }
    };

    return (
        <div 
            className="d-flex justify-content-center align-items-center" 
            style={{
                height: '100vh', 
                backgroundImage: `url(${background})`, // Set the background image
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <form className="bg-light p-4 rounded" onSubmit={handleSubmit}>
                <h2 className="text-center">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className="text-center mt-2">
                    Don't have an account?{' '}
                    <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
