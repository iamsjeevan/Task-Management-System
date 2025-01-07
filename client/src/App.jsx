import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShowCollaboration from './pages/ShowCollaboration';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';
import Registration from '../src/pages/Registration';
import CreateCollaboration from './pages/CreateCollaboration';
import Home from './pages/Home';
import CalendarPage from './pages/Calendar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/main" element={<Main />} />
        <Route path="/create-task" element={<CreateCollaboration />} />
        <Route path="/tasks" element={<ShowCollaboration />} />
        <Route path="/calender" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
