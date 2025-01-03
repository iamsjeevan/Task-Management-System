import React from 'react';
import NavForAll from '../components/NavForAll';
import Footer from '../components/Footer';

const ShowCollaboration: React.FC = () => {
  // Placeholder data; replace with API integration
  const collaborations = [
    { project: 'Project A', leader: 'Alice', team: ['Bob', 'Charlie'], priority: 2 },
    { project: 'Project B', leader: 'Bob', team: ['Alice', 'David'], priority: 1 },
  ];

  const sortedCollaborations = collaborations.sort((a, b) => b.priority - a.priority);

  return (
    <>
      <NavForAll />
      <div className="container mt-5">
        <h2>Collaborations</h2>
        <ul className="list-group">
          {sortedCollaborations.map((collab, index) => (
            <li className="list-group-item" key={index}>
              <strong>Project:</strong> {collab.project}<br />
              <strong>Leader:</strong> {collab.leader}<br />
              <strong>Team:</strong> {collab.team.join(', ')}<br />
              <strong>Priority:</strong> {collab.priority}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <a href="/main" className="btn btn-secondary">Return to Main</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowCollaboration;
