import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import NavForAll from '../components/NavForAll';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Analytics = () => {
  return (
    <>
      <NavForAll />
      <div className="container mt-5">
        <h2 className="text-center mb-4" style={{ color: 'black' }}>Analytics Dashboard</h2>
        
        <div className="row">
          {/* Card 1 - Tasks Completed */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Tasks Completed</h5>
                <p className="card-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>320</p>
                <Link to="/tasks" className="btn btn-outline-primary w-100">
                  View Tasks
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 - Pending Tasks */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Pending Tasks</h5>
                <p className="card-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</p>
                <Link to="/tasks" className="btn btn-outline-danger w-100">
                  View Pending Tasks
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 - Calendar Overview */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Calendar Overview</h5>
                <p className="card-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>18 Events</p>
                <Link to="/calender" className="btn btn-outline-success w-100">
                  View Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-5">
          <h4>Analytics Overview</h4>
          <p>Here you can analyze your performance in terms of tasks completed, pending tasks, and upcoming events on the calendar. Visualizing this data helps you focus on what needs attention and track your productivity more effectively.</p>
          
          {/* Placeholder for any charts or graphs */}
          <div className="bg-light p-3">
            <h5>Charts & Graphs (Placeholder)</h5>
            <p>Here we can add graphs to visually represent your tasks, progress, and calendar events over time.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Analytics;
