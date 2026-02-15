import React from "react";

const generateTimes = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 15) {
      const ampm = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const formattedMin = min.toString().padStart(2, "0");
      times.push(`${formattedHour}:${formattedMin} ${ampm}`);
    }
  }
  return times;
};

const TimePicker = ({ selectedTime, setSelectedTime }) => {
  const times = generateTimes();

  return (
    <div className="w-64 bg-white rounded-2xl shadow-2xl max-h-60 overflow-y-auto z-50 custom-scroll">
      {times.map((time, index) => (
        <div
          key={index}
          onClick={() => setSelectedTime(time)}
          className={`px-4 py-3 cursor-pointer transition-all duration-150 ${
            selectedTime === time
              ? "bg-gray-200 font-medium"
              : "hover:bg-gray-100"
          }`}
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimePicker;
