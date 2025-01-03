import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Registration: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundImage: 'url(/path/to/your-image.jpg)', backgroundSize: 'cover' }}>
      <form className="bg-light p-4 rounded">
        <h2 className="text-center">Register</h2>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
        <p className="text-center mt-2">
          <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Registration;
