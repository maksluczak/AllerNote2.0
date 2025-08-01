"use client";
import { useState } from "react";

const CustomRadio = ({ stateSetter, currentValue, symptom }) => {
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleClick = (value) => {
    stateSetter(currentValue === value ? null : value);
  };

  const handleMouseEnter = (value) => {
    setHoveredValue(value);
  };

  const handleMouseLeave = () => {
    setHoveredValue(null);
  };

  return (
    <div className="flex justify-between items-center gap-12 my-2">
      <div className="flex text-left text-base leading-none">{symptom}:</div>
      <div className="flex gap-1 items-center lg:gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            className={`block rounded-full px-3 py-3 ${
              currentValue >= value || hoveredValue >= value
                ? "bg-eden-700 duration-[400ms] "
                : "bg-white shadow-inner"
            } transition`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomRadio;
