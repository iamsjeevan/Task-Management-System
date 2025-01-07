import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SampleComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [projectName, setProjectName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  // Handle Login to save JWT token (for testing purposes)
  const handleLogin = async () => {
    // Simulating a login with email 'ronaldo@gmail.com' and password 'ronaldo'
    if (email === 'ronaldo@gmail.com' && password === 'ronaldo') {
      const result = { token: 'sample-jwt-token' }; // Simulating a token
      // Save the JWT token to localStorage
      localStorage.setItem('token', result.token);
      alert('Login successful!');
      // Redirect to another page after login
      navigate('/main');
    } else {
      alert('Invalid email or password');
    }
  };

  // Handle Submit to send request with JWT token
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You are not authenticated. Please log in.');
      return;
    }

    const data = {
      title: projectName,
      userEmail: email,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Task created successfully!');
        setProjectName('');
      } else {
        setResponseMessage('Error creating task: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while creating the task.');
    }
  };

  return (
    <div>
      <h2>Sample Component</h2>
      <div>
        <h3>Login</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <h3>Create Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
            required
          />
          <button type="submit">Submit Task</button>
        </form>
      </div>

      {responseMessage && <div>{responseMessage}</div>}
    </div>
  );
};

export default SampleComponent;
