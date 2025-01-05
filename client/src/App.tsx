import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateTask from '../src/pages/CreateTask';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';
import Registration from '../src/pages/Registration';
import Task from '../src/pages/Task';
import Home from './pages/Home.tsx';
import MainPage from './pages/mains';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/main" element={<Main />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/mains" element={<MainPage />} />

      </Routes>
    </Router>
  );
}

export default App;

