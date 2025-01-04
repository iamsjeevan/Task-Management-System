import axios from "axios";
import React, { useState } from "react";

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    userEmail: "",
    priority: "",
    team: [], // Now handles multiple team members as an array
  });

  const [teamMember, setTeamMember] = useState(""); // Temporary input for adding team members

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleAddTeamMember = () => {
    if (teamMember.trim()) {
      setTaskData((prev) => ({
        ...prev,
        team: [...prev.team, teamMember.trim()],
      }));
      setTeamMember(""); // Clear the input field
    }
  };

  const handleRemoveTeamMember = (index) => {
    setTaskData((prev) => ({
      ...prev,
      team: prev.team.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/task", taskData);
      alert("Task created successfully!");
      console.log(response.data);
      setTaskData({ title: "", userEmail: "", priority: "", team: [] });
    } catch (error) {
      console.error("Error creating task:", error.response?.data || error);
      alert("Failed to create task.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Task Title:</label>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">User Email:</label>
          <input
            type="email"
            name="userEmail"
            value={taskData.userEmail}
            onChange={handleChange}
            placeholder="Enter user email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Priority:</label>
          <select
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Team Members:</label>
          <div className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              value={teamMember}
              onChange={(e) => setTeamMember(e.target.value)}
              placeholder="Add team member"
              className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={handleAddTeamMember}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {taskData.team.map((member, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                <span>{member}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveTeamMember(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
