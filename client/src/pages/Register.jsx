
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image1 from '../assets/bp.webp';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/Login');
            })
            .catch(err => console.log(err));
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
                <h2 className="text-center mb-4 text-white">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control border-light rounded-3"
                            required
                            onChange={(e) => setName(e.target.value)}
                            style={{ backgroundColor: "#fff1e6" }} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
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
                        <label htmlFor="password" className="form-label text-white">
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
                    <button type="submit" className="btn btn-light w-100 rounded-3 shadow-sm mb-3">
                        Register
                    </button>
                </form>
                <p className="text-center text-white">
                    Already have an account? 
                    <Link to="/Login" className="text-decoration-none text-light fw-bold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;