import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from '../components/Footer';
import NavForAll from '../components/NavForAll';
import backgroundImage from '../assets/adminbg.png';  // Import the image

const CreateCollaboration = () => {
  const [teamSize, setTeamSize] = useState(0);
  const [teamMembers, setTeamMembers] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [priority, setPriority] = useState('');
  const [notes, setNotes] = useState('');
  const [finalDate, setFinalDate] = useState(''); // Replaced status with finalDate

  const navigate = useNavigate(); // Initialize navigate

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value) || 0;
    setTeamSize(size);
    setTeamMembers(new Array(size).fill(''));
  };

  const handleTeamMemberChange = (index, value) => {
    const updatedTeam = [...teamMembers];
    updatedTeam[index] = value;
    setTeamMembers(updatedTeam);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: projectName,
      userEmail: leaderName,
      priority: priority,
      team: teamMembers,
      notes: notes,
      finalDate: finalDate, // Using finalDate instead of status
    };

    const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage
    if (!token) {
      alert('You are not authenticated. Please log in.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add JWT token to the request header
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Task created successfully!');
        // Optionally reset the form fields
        setProjectName('');
        setLeaderName('');
        setTeamSize(0);
        setTeamMembers([]);
        setPriority('');
        setNotes('');
        setFinalDate(''); // Reset finalDate field

        // Redirect to /main
        navigate('/main');
      } else {
        alert('Error creating task: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the task.');
    }
  };

  return (
    <>
      <NavForAll />
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{
          height: '100vh',
          backgroundImage: `url(${backgroundImage})`,  // Use the imported image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <form className="bg-light p-5 rounded" onSubmit={handleSubmit}>
          <h2 className="text-center">Create Collaboration</h2>
          <div className="mb-3">
            <label>Project Name</label>
            <input
              type="text"
              className="form-control"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Leader Name</label>
            <input
              type="text"
              className="form-control"
              value={leaderName}
              onChange={(e) => setLeaderName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Number of Team Members</label>
            <input
              type="number"
              className="form-control"
              value={teamSize}
              onChange={handleTeamSizeChange}
              required
              min="1"
            />
          </div>
          {teamMembers.map((_, index) => (
            <div className="mb-3" key={index}>
              <label>Team Member {index + 1} Name</label>
              <input
                type="text"
                className="form-control"
                value={teamMembers[index]}
                onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <div className="mb-3">
            <label>Priority</label>
            <input
              type="number"
              className="form-control"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Additional Notes</label>
            <textarea
              className="form-control"
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label>Final Date</label> {/* Replaced status with finalDate */}
            <input
              type="date"
              className="form-control"
              value={finalDate}
              onChange={(e) => setFinalDate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateCollaboration;
