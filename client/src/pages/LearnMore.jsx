import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  // Import Link for navigation
import NavForAll from '../components/NavForAll';  // Assuming your Nav component is in a components folder
import Footer from '../components/Footer';  // Assuming your Footer component is in a components folder

const LearnMore = () => {
  return (
    <>
      <NavForAll /> {/* Include Nav component */}

      <div className="container mt-5">
        <h2 className="text-center mb-4">Learn More About the App</h2>

        <section className="my-4">
          <h3 className="text-primary">📝 Add Task</h3>
          <p>
            The "Add Task" feature allows you to quickly and easily add new tasks to your to-do list. 
            You can specify a title, due date, priority, and description for each task, ensuring you never forget an important item.
          </p>
          <p>
            Whether it's a work project or a personal task, the "Add Task" function is your first step toward staying organized and productive.
          </p>
        </section>

        <section className="my-4">
          <h3 className="text-primary">📋 Show Tasks</h3>
          <p>
            The "Show Tasks" feature displays all of your active and pending tasks. It organizes your tasks based on priority, due date, or category, helping you stay focused and on track.
          </p>
          <p>
            From the "Show Tasks" view, you can update, mark as complete, or delete tasks. This allows for easy task management and keeps your list up-to-date with your current priorities.
          </p>
        </section>

        <section className="my-4">
          <h3 className="text-primary">📅 Calendar</h3>
          <p>
            The "Calendar" feature lets you visualize your tasks and deadlines in a calendar format, helping you plan and manage your time effectively.
            You can easily see which tasks are due on specific days and stay on top of your schedule.
          </p>
          <p>
            The Calendar allows you to add tasks directly to specific dates, view upcoming events, and receive reminders as deadlines approach.
          </p>
        </section>

        <section className="my-4">
          <h3 className="text-primary">📊 Analytics</h3>
          <p>
            The "Analytics" feature provides valuable insights into your task management habits and productivity.
            It offers visualizations such as charts and graphs that show how you are spending your time, which areas you need to improve, and where you're excelling.
          </p>
          <p>
            You can track your progress over time, identify trends, and get feedback on how well you're managing your tasks.
            The Analytics section is a great way to fine-tune your productivity strategies and improve your task completion rate.
          </p>
        </section>

        <section className="my-5 text-center">
          <h4>Get started with these powerful features today!</h4>
          <Link to="/main" className="btn btn-primary btn-lg mt-3">Go Back to Home</Link>
        </section>
      </div>

      <Footer /> {/* Include Footer component */}
    </>
  );
};

export default LearnMore;
