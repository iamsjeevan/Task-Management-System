import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/homeimage.png'; // Correct image import

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
