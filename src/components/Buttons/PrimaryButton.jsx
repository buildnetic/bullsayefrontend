/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const PrimaryButton = ({ to, classes, rounded, title }) => {
  return (
    <>
      <NavLink
        to={to}
        className={`relative inline-flex items-center justify-center 
        overflow-hidden tracking-tighter group ${classes} rounded-${rounded}`}
      >
        <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span
          className={`absolute inset-0 w-full h-full rounded-rounded-${rounded} opacity-30 bg-gradient-to-b from-transparent via-transparent to-c-green`}
        ></span>
        <span className="relative">{title}</span>
      </NavLink>
    </>
  );
};

export default PrimaryButton;
