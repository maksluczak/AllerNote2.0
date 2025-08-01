import React, { useState } from "react";
import { CalendarFooter } from "./CalendarFooter";
import { CalendarGrid } from "./CalendarGrid";
import { formatDate } from "../../utils/date";
import { CalendarHeader } from "./CalendarHeader";

export const Calendar = ({
  setCurrentMonth,
  setSelectedDate,
  currentMonth,
  selectedDate,
}) => {
  return (
    <div className="flex flex-col w-fit">
      <CalendarHeader currentDate={currentMonth} />
      <div className="border bg-white shadow-md rounded-2xl p-2 lg:p-4">
        <CalendarGrid
          currentDate={currentMonth}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
        <CalendarFooter
          currentMonth={currentMonth.getMonth()}
          onPrevMonth={() =>
            setCurrentMonth(
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1,
                1
              )
            )
          }
          onNextMonth={() =>
            setCurrentMonth(
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1,
                1
              )
            )
          }
        />
      </div>
    </div>
  );
};
