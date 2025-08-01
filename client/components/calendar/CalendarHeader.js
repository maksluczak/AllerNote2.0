import React from "react";
import HeadingPasek from "./HeadingPasek";

export const CalendarHeader = ({ currentDate }) => {
  const formatMonthYear = (date) => {
    const formattedDate = date.toLocaleDateString("pl-PL", {
      month: "long",
      year: "numeric",
    });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <header className="relative mb-9">
      <h2 className="text-3xl font-bold">{formatMonthYear(currentDate)}</h2>
      <div className="absolute h-14 right-[40%] top-1/2 -z-10 transform -translate-y-1/2">
        <HeadingPasek />
      </div>
    </header>
  );
};
