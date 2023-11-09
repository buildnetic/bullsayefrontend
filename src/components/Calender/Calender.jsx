/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = ({ onDateChange, setOpenCalender }) => {
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

  return (
    <>
      <Calendar
        onChange={handleDateChange}
        value={value}
        minDate={tomorrow}
        onClickDay={() => setOpenCalender(false)}
      />
    </>
  );
};

export default Calender;
