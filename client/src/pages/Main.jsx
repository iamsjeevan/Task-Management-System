import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import NavForAll from '../components/NavForAll';

const Main = () => {
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.href = '/login'; // Redirect to login if not authenticated
    }
  }, []);

  return (
    <>
      <NavForAll />
      <div className="d-flex">
        {/* Sidebar Navigation */}
        <div
          className="bg-light border-end vh-100 p-3"
          style={{ width: '250px' }}
        >
          <h5 className="mb-4">My Projects</h5>
          <ul className="list-unstyled">
            {/* Connect "My Work" to ShowCollaboration */}
            <li className="mb-2">
              <a href="/tasks" className="text-decoration-none">
                🎯 My Work
              </a>
            </li>
            <li>
              <a href="/home" className="text-decoration-none">
                🏡 Home
              </a>
            </li>
          </ul>
          <hr />
          <a href="/create-task" className="btn btn-outline-primary w-100">
            Add Task
          </a>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow-1 p-4">
          <h2>Today</h2>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Welcome to Todoist! And to 2025 ✨
              <button className="btn btn-sm btn-success">Complete</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Start small: Add just 1 task that's occupying space in your mind 🧠
              <button className="btn btn-sm btn-warning">Pending</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Finding your flow? Download Todoist for your other devices!
              <button className="btn btn-sm btn-info">Explore</button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
