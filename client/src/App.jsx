import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShowCollaboration from './pages/ShowCollaboration';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';
import Registration from '../src/pages/Registration';
import CreateCollaboration from './pages/CreateCollaboration';
import Home from './pages/Home';
import CalendarPage from './pages/Calendar';
import LearnMore from './pages/LearnMore';
import AdminLogin from './pages/AdminLogin';
import AdminMain from './pages/AdminMain';
import AdminRegister from './pages/AdminRegister';
import Analytics from './pages/Analytics';
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
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/admin_register" element={<AdminRegister />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/admin_main" element={<AdminMain />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
