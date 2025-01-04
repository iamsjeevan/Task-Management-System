import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<{ access_token: string }>('http://127.0.0.1:5000/login', { email, password });
      localStorage.setItem('accessToken', response.data.access_token); // Store the token
      window.location.href = '/main'; // Redirect to Main page
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundSize: 'cover' }}>
      <form className="bg-light p-4 rounded" onSubmit={handleLogin}>
        <h2 className="text-center">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
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
          <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
