import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from '../assets/bp.webp';
import { useUser } from '../App';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser(); // Ensure useUser is correctly defined
    const navigate = useNavigate();

    // Email validation function
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email before proceeding
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        axios
            .post('http://127.0.0.1:5000/login', { email, password })
            .then((result) => {
                if (result.data !== "No User Found" && result.data !== "Password is Incorrect") {
                    toast.success("User logged in successfully!");
                    setUser(result.data); // Save user data in context or state
                    navigate('/Main');
                } else {
                    toast.error(result.data);
                }
            })
            .catch((err) => {
                toast.error("An error occurred. Please try again later.");
                console.error(err);
            });
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div
                className="bg-gradient p-5 rounded shadow w-100"
                style={{
                    maxWidth: '450px',
                    background: 'linear-gradient(to bottom right, #ff7e5f, #feb47b)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <ToastContainer />
                <h2 className="text-center mb-4 text-white">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="form-label text-white"
                            aria-label="Email"
                        >
                            <strong>Email</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control border-light rounded-3"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ backgroundColor: "#fff1e6" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="password"
                            className="form-label text-white"
                            aria-label="Password"
                        >
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control border-light rounded-3"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ backgroundColor: "#fff1e6" }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-light w-100 rounded-3 shadow-sm mb-3"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-white">
                    Don't have an account?{' '}
                    <Link
                        to="/Register"
                        className="text-decoration-none text-light fw-bold"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
