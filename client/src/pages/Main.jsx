import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import NavForAll from '../components/NavForAll';
import { Link } from 'react-router-dom';  // Import Link for navigation
import backgroundImage from '../assets/mainbg.png';  // Import image

const Main = () => {
  return (
    <>
      <NavForAll />
      <div className="d-flex" style={{
        backgroundImage: `url(${backgroundImage})`,  // Use imported image as background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',  // Adding some padding to the outer container
      }}>
        {/* Sidebar Navigation */}
        <div
          className="bg-light border-end vh-100 p-3"
          style={{
            width: '250px',
            borderRight: '2px solid #343a40'  // Darkened the border color
          }}
        >
          <h5 className="mb-4">My Projects</h5>
          <ul className="list-unstyled">
            {/* Connect "My Work" to ShowCollaboration */}
            <li className="mb-2">
              <a href="/tasks" className="text-decoration-none">
                🎯 My Work
              </a>
            </li>
            {/* Changed Home to Analytics */}
            <li>
              <a href="/analytics" className="text-decoration-none">
                📊 Analytics
              </a>
            </li>
            {/* Calendar Button */}
            <li className="mt-3">
              <a href="/calender" className="btn btn-outline-dark w-100">
                📅 Calendar
              </a>
            </li>
          </ul>
          <hr />
          <a href="/create-task" className="btn btn-outline-primary w-100">
            Add Task
          </a>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow-1 p-4" style={{
          color: 'white',  // White text
          marginTop: '20px',  // Ensure there’s space from the top
          zIndex: '2',  // Ensuring text is on top
        }}>
          {/* Title with Black Color and Text Shadow */}
          <h2 style={{
            color: 'black',  // Set title color to black
            textShadow: '4px 4px 6px rgba(255, 255, 255, 0.7)',  // White text shadow for visibility
            fontSize: '2.5rem',  // Slightly larger text for better readability
            fontWeight: 'bold',  // Bold title for emphasis
          }}>
            Welcome to WorkHive!
          </h2>
          
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              This app allows you to stay organized and manage your tasks effectively. You'll never forget an important task again!
              <Link to="/learn-more" className="btn btn-sm btn-info">Learn More</Link>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Our goal is to streamline your productivity and keep you focused, helping you manage your time efficiently.
              <a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-warning"
              >
                How It Works
              </a>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              With seamless cross-platform syncing, you can access your tasks from any device at any time.
              {/* Updated "Get Started" button to link to Show Tasks page */}
              <Link to="/tasks" className="btn btn-sm btn-success">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
