import React from 'react';
import './MainPage.css'; // Custom CSS or use Tailwind/Bootstrap classes

const MainPage: React.FC = () => {
  return (
    <div className="main-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Jeevan</h2>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">Add Task</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Inbox</a></li>
            <li className="active"><a href="#">Today</a></li>
            <li><a href="#">Upcoming</a></li>
            <li><a href="#">Filters & Labels</a></li>
          </ul>
        </nav>
        <div className="projects">
          <h3>My Projects</h3>
          <ul>
            <li><a href="#">Home 🏡</a></li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="content-header">
          <h1>Today</h1>
          <div className="calendar-events">
            <a href="#">Calendar events</a>
          </div>
        </header>
        <div className="task-view">
          <div className="no-tasks">
            <h2>Have a marvelous day off, Jeevan!</h2>
            <p>Schedule days off in the Productivity tab of your Settings menu.</p>
            <a href="#" className="adjust-schedule">Adjust your schedule</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
