import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 mb-5 text-center">Welcome to Collaboration Task Management System</h1>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-lg me-3">Enter Collaboration</button>
        <button className="btn btn-secondary btn-lg">Show Collaborations</button>
      </div>
    </div>
  );
};

export default Main;
