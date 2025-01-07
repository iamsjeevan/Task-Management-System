import React, { useState, useEffect } from 'react';
import NavForAll from '../components/NavForAll';
import Footer from '../components/Footer';
import axios from 'axios';

const ShowCollaboration = () => {
  const [collaborations, setCollaborations] = useState([]);
  const [filter, setFilter] = useState('All'); // Sidebar filter state

  useEffect(() => {
    const fetchCollaborations = async () => {
      // Get the email directly from localStorage
      const email = localStorage.getItem('email');

      if (email) {
        try {
          // Fetch all tasks from the backend
          const response = await axios.get('http://127.0.0.1:5000/tasks', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send the token for authentication
            },
          });

          // Filter tasks where the `by` field inside `activities` matches the email
          const filteredTasks = response.data.tasks.filter((task) =>
            task.activities.some((activity) => activity.by === email)
          );

          // Update state with filtered tasks
          setCollaborations(filteredTasks);
        } catch (error) {
          console.error("There was an error fetching the collaborations:", error);
        }
      }
    };

    fetchCollaborations(); // Fetch collaborations on component mount
  }, []);

  // Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    setCollaborations((prev) => {
      const updatedCollaborations = prev.map((collab) =>
        collab.id === id ? { ...collab, status: newStatus } : collab
      );

      // Optional: Send status update to the backend
      axios.patch(`http://127.0.0.1:5000/tasks/${id}`, { status: newStatus })
        .then(() => {
          console.log(`Status for collaboration with ID ${id} updated to ${newStatus}`);
        })
        .catch((error) => {
          console.error("There was an error updating the status:", error);
        });

      return updatedCollaborations;
    });
  };

  // Function to handle deletion of a collaboration
  const handleDelete = (id) => {
    // Remove the collaboration from state
    setCollaborations((prev) => prev.filter((collab) => collab.id !== id));

    // Optional: Call the backend to delete the collaboration
    axios.delete(`http://127.0.0.1:5000/tasks/${id}`)
      .then(() => {
        console.log(`Collaboration with ID ${id} deleted successfully.`);
      })
      .catch((error) => {
        console.error("There was an error deleting the collaboration:", error);
      });
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
                <div className="d-flex flex-column">
                  <select
                    className="form-select mb-2"
                    value={collab.status}
                    onChange={(e) => handleStatusChange(collab.id, e.target.value)}
                  >
                    <option value="Start">Start</option>
                    <option value="Complete">Complete</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(collab.id)}
                  >
                    Delete
                  </button>
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
