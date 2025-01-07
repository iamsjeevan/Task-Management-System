import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';
import Registration from '../src/pages/Registration';
import AdminLogin from './pages/AdminLogin';
import AdminMain from './pages/AdminMain';
import AdminRegister from './pages/AdminRegister';
import Analytics from './pages/Analytics';
import CalendarPage from './pages/Calendar';
import CreateCollaboration from './pages/CreateCollaboration';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import ShowCollaboration from './pages/ShowCollaboration';
import SampleComponent from './pages/sample';
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
        <Route path="/sample" element={<SampleComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
