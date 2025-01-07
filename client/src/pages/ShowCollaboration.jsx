import React, { useState, useEffect } from 'react';
import NavForAll from '../components/NavForAll';
import Footer from '../components/Footer';
import axios from 'axios';

const ShowCollaboration = () => {
  const [collaborations, setCollaborations] = useState([]);
  const [filter, setFilter] = useState('All'); // Sidebar filter state

  useEffect(() => {
    // Fetch collaborations from the backend
    axios.get('http://127.0.0.1:5000/tasks') // Update the API endpoint if needed
      .then((response) => {
        setCollaborations(response.data.tasks); // Update state with the fetched tasks
      })
      .catch((error) => {
        console.error("There was an error fetching the collaborations:", error);
      });
  }, []);

  // Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    setCollaborations((prev) =>
      prev.map((collab) =>
        collab.id === id ? { ...collab, status: newStatus } : collab
      )
    );
  };

  // Filter collaborations based on selected filter
  const filteredCollaborations =
    filter === 'All'
      ? collaborations
      : collaborations.filter((collab) => collab.status === filter);

  const sortedCollaborations = filteredCollaborations.sort((a, b) => b.priority - a.priority);

  // Helper function to handle team data
  const handleTeamData = (team) => {
    if (Array.isArray(team)) {
      return team.join(', ');
    } else if (typeof team === 'string') {
      return team.split(',').join(', ');
    }
    return '';
  };

  return (
    <>
      <NavForAll />
      <div className="d-flex">
        {/* Sidebar for Filters */}
        <div
          className="bg-light border-end vh-100 p-3"
          style={{ width: '250px', overflowY: 'auto' }}
        >
          <h5>Filters</h5>
          <ul className="list-unstyled">
            <li
              className={`mb-2 ${filter === 'All' ? 'fw-bold' : ''}`}
              onClick={() => setFilter('All')}
              style={{ cursor: 'pointer' }}
            >
              All
            </li>
            <li
              className={`mb-2 ${filter === 'Start' ? 'fw-bold' : ''}`}
              onClick={() => setFilter('Start')}
              style={{ cursor: 'pointer' }}
            >
              Start
            </li>
            <li
              className={`mb-2 ${filter === 'Complete' ? 'fw-bold' : ''}`}
              onClick={() => setFilter('Complete')}
              style={{ cursor: 'pointer' }}
            >
              Complete
            </li>
            <li
              className={`mb-2 ${filter === 'Pending' ? 'fw-bold' : ''}`}
              onClick={() => setFilter('Pending')}
              style={{ cursor: 'pointer' }}
            >
              Pending
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="container mt-5 flex-grow-1">
          <h2>Collaborations</h2>
          <ul className="list-group">
            {sortedCollaborations.map((collab) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={collab.id}>
                <div>
                  <strong>Project:</strong> {collab.project_name}<br />
                  <strong>Created On:</strong> {new Date(collab.created_date).toLocaleString()}<br />
                  <strong>Priority:</strong> {collab.priority}<br />
                  <strong>Status:</strong> {collab.status}<br />
                  <strong>Team:</strong> {handleTeamData(collab.team)}<br />
                  <strong>Notes:</strong> {collab.notes}
                </div>
                <div>
                  <select
                    className="form-select"
                    value={collab.status}
                    onChange={(e) => handleStatusChange(collab.id, e.target.value)}
                  >
                    <option value="Start">Start</option>
                    <option value="Complete">Complete</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </li>
            ))}
          </ul>
          {sortedCollaborations.length === 0 && (
            <p className="text-muted mt-3">No collaborations found.</p>
          )}
          <div className="mt-4">
            <a href="/main" className="btn btn-secondary">Return to Main</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowCollaboration;
