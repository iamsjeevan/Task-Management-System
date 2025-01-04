import React, { useEffect, useState } from "react";
import axios from "axios";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks from the API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/tasks");
        setTasks(response.data.tasks);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch tasks. Please try again.");
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="tasks-list">
      <h1>All Tasks</h1>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id} className="task-item">
              <h2>{task.project_name}</h2>
              <p>Priority: {task.priority}</p>
              <p>Stage: {task.stage}</p>
              <p>Created: {new Date(task.created_date).toLocaleString()}</p>
              <p>Team: {task.team.join(", ")}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TasksList;
