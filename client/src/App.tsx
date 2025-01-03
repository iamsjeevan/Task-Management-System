import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from '../src/pages/Login';
import Registration from '../src/pages/Registration';
import Main from '../src/pages/Main';
import CreateCollaboration from '../src/pages/CreateCollaboration';
import ShowCollaboration from '../src/pages/ShowCollaboration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/main" element={<Main />} />
        <Route path="/create-collaboration" element={<CreateCollaboration />} />
        <Route path="/show-collaboration" element={<ShowCollaboration />} />
      </Routes>
    </Router>
  );
}

export default App;

