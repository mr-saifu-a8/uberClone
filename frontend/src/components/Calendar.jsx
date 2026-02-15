import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

  const Calendar = ({ selectedDate, setSelectedDate }) => {

  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [];
  for (let i = 1970; i <= 2100; i++) {
    years.push(i);
  }

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleMonthChange = (e) => {
    setCurrentDate(new Date(year, parseInt(e.target.value), 1));
  };

  const handleYearChange = (e) => {
    setCurrentDate(new Date(parseInt(e.target.value), month, 1));
  };

  const isSameDate = (d1, d2) =>
    d1 &&
    d2 &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  const daysArray = [];
  for (let i = 0; i < firstDay; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(new Date(year, month, i));
  }

  return (
    <div className="w-105 bg-white rounded-2xl shadow-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={handlePrevMonth}>
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <select
            value={month}
            onChange={handleMonthChange}
            className="text-lg font-medium outline-none bg-transparent"
          >
            {months.map((m, index) => (
              <option key={index} value={index}>
                {m}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={handleYearChange}
            className="text-lg font-medium outline-none bg-transparent"
          >
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>

        <button onClick={handleNextMonth}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 text-center text-gray-500 mb-4">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-sm font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-y-3 text-center">
        {daysArray.map((date, index) => (
          <div key={index}>
            {date ? (
              <button
                onClick={() => setSelectedDate(date)}
                className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto
                  ${
                    isSameDate(date, selectedDate)
                      ? "border-2 border-black font-semibold"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {date.getDate()}
              </button>
            ) : (
              <div className="w-10 h-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
