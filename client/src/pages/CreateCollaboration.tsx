import React, { useState } from 'react';
import NavForAll from '../components/NavForAll';
import Footer from '../components/Footer';

const CreateCollaboration: React.FC = () => {
  const [teamSize, setTeamSize] = useState(0);
  const [teamMembers, setTeamMembers] = useState<string[]>([]);

  const handleTeamSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value) || 0;
    setTeamSize(size);
    setTeamMembers(new Array(size).fill(''));
  };

  const handleTeamMemberChange = (index: number, value: string) => {
    const updatedTeam = [...teamMembers];
    updatedTeam[index] = value;
    setTeamMembers(updatedTeam);
  };

  return (
    <>
      <NavForAll />
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundImage: 'url(/path/to/your-image.jpg)', backgroundSize: 'cover' }}>
        <form className="bg-light p-5 rounded">
          <h2 className="text-center">Create Collaboration</h2>
          <div className="mb-3">
            <label>Project Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Leader Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Number of Team Members</label>
            <input type="number" className="form-control" onChange={handleTeamSizeChange} />
          </div>
          {teamMembers.map((_, index) => (
            <div className="mb-3" key={index}>
              <label>Team Member {index + 1} Name</label>
              <input
                type="text"
                className="form-control"
                value={teamMembers[index]}
                onChange={(e) => handleTeamMemberChange(index, e.target.value)}
              />
            </div>
          ))}
          <div className="mb-3">
            <label>Priority</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Link to Meet</label>
            <input type="url" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateCollaboration;