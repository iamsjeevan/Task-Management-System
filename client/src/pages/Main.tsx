import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import NavForAll from '../components/NavForAll';

const Main: React.FC = () => {
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.href = '/login'; // Redirect to login if not authenticated
    }
  }, []);

  return (
    <>
      <NavForAll />
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundSize: 'cover' }}>
        <div className="text-white bg-dark p-4 rounded">
          <h1>Collaborative Task Management System</h1>
          <div className="mt-3">
            <a href="/create-task" className="btn btn-primary me-2">Create Collaboration</a>
            <a href="/tasks" className="btn btn-secondary">Show Collaboration</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
