/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = ({ onDateChange }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [value, onChange] = useState(tomorrow);

  // Callback to update the selected date in the parent component
  const handleDateChange = (newDate) => {
    onChange(newDate); // Update the local state
    onDateChange(newDate); // Call the parent component's callback
  };

  // When the component mounts, call the callback with the initial date
  useEffect(() => {
    onDateChange(value);
  }, [onDateChange, value]);

  // Format the date as DD/MM/YYYY
  const formattedDate = value.toLocaleDateString("en-GB");

  return (
    <>
      <Calendar onChange={handleDateChange} value={value} minDate={tomorrow} />
    </>
  );
};

export default Calender;
