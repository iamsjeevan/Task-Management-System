import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ color: 'black', padding: '50px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <h1>Collaborative Task Management System</h1>
          <p>Manage your tasks and collaborations efficiently.</p>
          <a href="/create-task" className="btn btn-primary me-2">Create Collaboration</a>
            <a href="/tasks" className="btn btn-secondary">Show Collaboration</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
