import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex align-items-center w-100 justify-content-between">
          <div>
            <Link to="/Login" className="btn btn-primary me-2">
              Login
            </Link>
            <Link to="/Register" className="btn btn-secondary">
              Registration
            </Link>
          </div>
          <span className="navbar-brand fw-bold text-dark ms-auto">CTMS</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
