import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavForAll = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  
  // Simulated logged-in user data (replace with actual logic from authentication)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NavForAll</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/main">Main</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/more">More</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={toggleUserInfo}>
                User
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Show user information on button click */}
      {showUserInfo && (
        <div className="user-info bg-light p-3 mt-2 rounded">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </nav>
  );
};

export default NavForAll;
