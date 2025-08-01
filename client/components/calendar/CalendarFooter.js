import React from "react";

export const CalendarFooter = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];
  months[-1] = "Grudzień";

  return (
    <div className="flex items-center justify-between px-3 mt-7">
      <button
        onClick={onPrevMonth}
        className="group text-base text-center text-eden-700"
        aria-label="Previous month"
      >
        <span className="inline-block transform group-hover:-translate-x-[2px] transition-transform">
          &lt;
        </span>{" "}
        {months[(currentMonth - 1) % 12]}
      </button>
      <button
        onClick={onNextMonth}
        className="group text-base text-center text-eden-700"
        aria-label="Next month"
      >
        {months[(currentMonth + 1) % 12]}{" "}
        <span className="inline-block transform group-hover:translate-x-[2px] transition-transform">
          &gt;
        </span>
      </button>
    </div>
  );
};
