import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';  // Import React Bootstrap components for Modal
import axios from 'axios';  // Import axios for making API calls

const NavForAll = () => {
  const [showModal, setShowModal] = useState(false);  // Modal visibility state
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: ''
  });
  const navigate = useNavigate();  // To handle navigation

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          // Make an API call to fetch user details
          const response = await axios.get('http://localhost:5000/get_details', {
            headers: {
              Authorization: `Bearer ${token}`  // Include token in the header
            }
          });
          setUserInfo(response.data);  // Set user details to state
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };
    
    fetchUserDetails();  // Call the function to fetch user data
  }, []);  // Empty dependency array to run only once when the component mounts

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
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#d3d3d3' }}>
      <div className="container">
        <Link className="navbar-brand text-dark" to="/main">
          WorkHive
        </Link>
        {/* Circle button for User with an image or icon */}
        <button
          className="btn btn-outline-dark rounded-circle p-2"
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
