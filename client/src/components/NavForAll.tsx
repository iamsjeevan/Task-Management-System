import React from 'react';

const NavForAll: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">CTMS</span>
        <button className="btn btn-outline-dark" onClick={() => alert('User Info: Name, Email')}>
          User
        </button>
      </div>
    </nav>
  );
};

export default NavForAll;
