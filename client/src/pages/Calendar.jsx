import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar
import Footer from '../components/Footer';
import NavForAll from '../components/NavForAll';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <NavForAll />
      <div className="container my-5">
        <h2 className="text-center mb-4">Your Calendar</h2>
        <div className="d-flex justify-content-center">
          {/* Calendar */}
          <Calendar 
            onChange={handleDateChange} 
            value={date} 
            className="shadow-sm" 
          />
        </div>
        <p className="mt-4 text-center">
          Selected Date: {date.toLocaleDateString()}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default CalendarPage;
