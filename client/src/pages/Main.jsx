import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import NavForAll from '../components/NavForAll';

const Main = () => {
  //useEffect(() => {
   // const token = localStorage.getItem('accessToken');
   // if (!token) {
     // window.location.href = '/login'; // Redirect to login if not authenticated
   // }
  //}, []);

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
          <h2>Welcome to the App!</h2>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              This app allows you to stay organized and manage your tasks effectively. You'll never forget an important task again!
              <button className="btn btn-sm btn-info">Learn More</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Our goal is to streamline your productivity and keep you focused, helping you manage your time efficiently.
              <button className="btn btn-sm btn-warning">How It Works</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              With seamless cross-platform syncing, you can access your tasks from any device at any time.
              <button className="btn btn-sm btn-success">Get Started</button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
