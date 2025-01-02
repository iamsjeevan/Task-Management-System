import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // CSS for background and styling

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container text-center text-black">
        <h1 className="display-3 font-weight-bold">Collaboration Task Management System</h1>
        <p className="lead mt-4 fw-bold fs-5">
          Streamline your team's workflow with our all-in-one task management solution.
        </p>
        <p className="mt-4 fw-bold fs-5">
          CTMS is designed to help you assign, track, and manage tasks effectively. Collaborate with your team, 
          set priorities, and meet deadlines effortlessly. Empower your organization to achieve more with CTMS.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
