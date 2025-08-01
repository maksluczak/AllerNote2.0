import React from "react";
import { getDaysInMonth, getFirstDayOfMonth } from "../../utils/date";

export const CalendarGrid = ({ currentDate, selectedDate, onSelectDate }) => {
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  const firstDayOfMonth = getFirstDayOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const days = ["Nd ", "Pon", "Wt ", "Śr ", "Czw", "Pt ", "Sob"];

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date) => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <div className="select-none">
      <div className="grid grid-cols-7 mb-4">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm italic font-light text-eden-700"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 md:gap-1 lg:gap-3">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-12" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            index + 1
          );
          return (
            <button
              key={index}
              onClick={(e) => onSelectDate(date)}
              className={`rounded-lg w-11 h-11 hover:bg-eden-700/60 hover:text-white transition ${
                isSelected(date)
                  ? "bg-eden-700 text-white hover:bg-eden-700/100"
                  : "text-eden-700"
              } ${
                isToday(date) && " outline outline-eden-700 outline-1"
              } lg:w-[3.2rem] lg:h-[3.2rem]`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};
