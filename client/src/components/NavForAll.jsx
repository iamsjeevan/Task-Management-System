import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';  // Import React Bootstrap components for Modal

const NavForAll = () => {
  const [showModal, setShowModal] = useState(false);  // Modal visibility state
  const [userInfo] = useState({
    name: 'John Doe', // Example user data, you can replace this with dynamic data
    email: 'johndoe@example.com'
  });
  const navigate = useNavigate();  // To handle navigation

  // Handle modal close
  const handleCloseModal = () => setShowModal(false);

  // Handle modal open
  const handleShowModal = () => setShowModal(true);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('accessToken');  // Clear token from localStorage (if any)
    navigate('/');  // Redirect to homepage
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#6c757d' }}> {/* Grey background */}
      <div className="container">
        {/* Link the WorkHive to the main page with white text */}
        <Link className="navbar-brand text-white" to="/main">
          WorkHive
        </Link>
        {/* Circle button for User with an image or icon */}
        <button
          className="btn btn-outline-light rounded-circle p-2"
          style={{ width: '40px', height: '40px' }}
          onClick={handleShowModal}
        >
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"  // Example user avatar
            alt="User Avatar"
            className="rounded-circle"
            style={{ width: '100%', height: '100%' }}  // Make image fill the circle
          />
        </button>
      </div>

      {/* Modal for User Info and Logout */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default NavForAll;
