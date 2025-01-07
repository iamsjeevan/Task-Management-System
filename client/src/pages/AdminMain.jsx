import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminMain = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        navigate('/admin_login');
    };

    return (
        <div
            className="admin-main-container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <h1>Welcome, Admin!</h1>
            <button
                onClick={handleLogout}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    marginTop: '20px',
                    fontSize: '16px',
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default AdminMain;
