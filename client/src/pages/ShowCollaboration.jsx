import React, { useState } from 'react';
import NavForAll from '../components/NavForAll';
import Footer from '../components/Footer';

const ShowCollaboration = () => {
  const [collaborations, setCollaborations] = useState([
    { id: 1, project: 'Project A', leader: 'Alice', team: ['Bob', 'Charlie'], priority: 2, status: 'Start' },
    { id: 2, project: 'Project B', leader: 'Bob', team: ['Alice', 'David'], priority: 1, status: 'Complete' },
    { id: 3, project: 'Project C', leader: 'Charlie', team: ['Alice', 'Bob'], priority: 3, status: 'Pending' },
  ]);

  const [filter, setFilter] = useState('All'); // Sidebar filter state

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
                  <strong>Project:</strong> {collab.project}<br />
                  <strong>Leader:</strong> {collab.leader}<br />
                  <strong>Team:</strong> {collab.team.join(', ')}<br />
                  <strong>Priority:</strong> {collab.priority}<br />
                  <strong>Status:</strong> {collab.status}
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
