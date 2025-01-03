import React from 'react';
import NavForAll from '../components/NavForAll';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main: React.FC = () => {
  return (
    <>
      <NavForAll />
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundImage: 'url(/path/to/your-image.jpg)', backgroundSize: 'cover' }}>
        <div className="text-white bg-dark p-4 rounded">
          <h1>Collaborative Task Management System</h1>
          <div className="mt-3">
            <a href="/create-collaboration" className="btn btn-primary me-2">Create Collaboration</a>
            <a href="/show-collaboration" className="btn btn-secondary">Show Collaboration</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
