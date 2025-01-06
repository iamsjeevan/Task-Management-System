import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import background from '../assets/homeimage.png'; // Import your local background image

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundImage: `url(${background})`, // Use the imported image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: 'black',
            padding: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent background to highlight text
            borderRadius: '8px', // Optional: rounded corners for the content box
            textAlign: 'center', // Center the content
          }}
        >
          <h1>WorkHive</h1>
          <p>WorkHive is a collaborative task management system that allows teams to effectively manage tasks and track progress. Organize your projects, collaborate seamlessly, and achieve your goals with ease.</p>
          <div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
