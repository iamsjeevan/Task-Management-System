import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);  // Loading state for the registration process
    const [error, setError] = useState(null);  // State to show error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);  // Reset error state before making the request
        try {
            const response = await axios.post('http://127.0.0.1:5000/admin_register', { name, email, password });

            if (response.status === 201) {
                alert('Registration successful! Please login to continue.');
                navigate('/admin_login');  // Redirect to login page after successful registration
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred during registration. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="register-container"
            style={{
                backgroundImage: 'url(/path/to/your/background/image)',  // Use your background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="register-card" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px' }}>
                <h2 className="register-title" style={{ marginBottom: '20px', textAlign: 'center' }}>Admin Register</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            autoComplete="off"
                            name="name"
                            className="form-input"
                            required
                            onChange={(e) => setName(e.target.value)}
                            style={{ padding: '10px', marginBottom: '15px', width: '100%', borderRadius: '5px' }}
                        />
                    </div>
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
                        className="register-button"
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
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminRegister;
