import { ChartBarIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Otp = ({ numInputs = 4, onChange }) => {
  const [otp, setOtp] = useState("");
  const inputRefs = Array(numInputs)
    .fill(0)
    .map(() => useRef());

  const handleChange = (index, value) => {
    setOtp((prevOtp) => {
      const newOtp = prevOtp.split("");
      newOtp[index] = value;
      return newOtp.join("");
    });

    if (onChange && typeof onChange === "function") {
      onChange(otp);
    }

    // Move to the next input field
    if (value !== "" && index < numInputs - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text/plain")
      .trim()
      .slice(0, numInputs);
    const pasteValues = pasteData.split("");

    pasteValues.forEach((value, index) => {
      if (inputRefs[index] && inputRefs[index].current) {
        inputRefs[index].current.value = value;
        handleChange(index, value);
      }
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" max-w-md rounded-md shadow-lg p-8 py-10 border-2 border-gray-200">
        <NavLink
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="font-bold text-4xl cursor-pointer flex items-center gap-1 justify-center"
        >
          <ChartBarIcon className="w-7 h-7 text-c-green" />
          <span>VIPANA</span>
        </NavLink>
        <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-c-green">
          Verify your Email
        </h2>
        <p className="mt-3 text-center text-md text-gray-500">
          Enter the verification code that we have sent to your email
        </p>

        <div className="text-center my-5">
          {Array(numInputs)
            .fill(0)
            .map((_, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="text-3xl w-12 h-16 border border-gray-300 rounded-lg mx-1 text-center ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-c-green-dark "
                value={otp[index] || ""}
                onChange={(e) => handleChange(index, e.target.value)}
                onPaste={handlePaste}
                ref={inputRefs[index]}
              />
            ))}
        </div>

        <button
          type="submit"
          className="mt-4 flex w-full justify-center rounded-md bg-c-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-c-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-green"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Otp;
