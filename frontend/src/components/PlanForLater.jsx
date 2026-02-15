import React, { useState } from "react";
import watchImg from "../assets/images/watchImg.png";
import { FaCalendarAlt, FaClock, FaCreditCard } from "react-icons/fa";
import Calendar from "./Calendar";
import TimePicker from "./TimePicker";

const PlanForLater = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);

  // 🔥 NEW STATES
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="px-32 py-12">
      <h1 className="text-4xl font-bold mb-10">Plan for later</h1>

      <div className="flex gap-8">
        {/* LEFT CARD */}
        <div className="flex-1 bg-[#8FB7BF] rounded-3xl p-12 flex justify-between relative overflow-visible">
          <div className="max-w-md relative">
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Get your ride right <br /> with Uber Reserve
            </h2>

            <p className="text-lg mb-6">Choose date and time</p>

            <div className="flex gap-4 mb-6 relative">
              {/* DATE */}
              <div className="flex flex-col relative">
                <label className="text-sm mb-1">Date</label>

                <div
                  onClick={() => {
                    setShowCalendar(!showCalendar);
                    setShowTime(false);
                  }}
                  className="bg-white rounded-lg px-4 py-3 flex items-center gap-3 w-44 cursor-pointer"
                >
                  <FaCalendarAlt />
                  <input
                    type="text"
                    readOnly
                    value={selectedDate ? selectedDate.toDateString() : ""}
                    placeholder="Select date"
                    className="outline-none w-full bg-transparent cursor-pointer"
                  />
                </div>

                {showCalendar && (
                  <div className="absolute top-20 z-50">
                    <Calendar
                      selectedDate={selectedDate}
                      setSelectedDate={(date) => {
                        setSelectedDate(date);
                        setShowCalendar(false);
                      }}
                    />
                  </div>
                )}
              </div>

              {/* TIME */}
              <div className="flex flex-col relative">
                <label className="text-sm mb-1">Time</label>

                <div
                  onClick={() => {
                    setShowTime(!showTime);
                    setShowCalendar(false);
                  }}
                  className="bg-white rounded-lg px-4 py-3 flex items-center gap-3 w-44 cursor-pointer"
                >
                  <FaClock />
                  <input
                    type="text"
                    readOnly
                    value={selectedTime}
                    placeholder="Select time"
                    className="outline-none w-full bg-transparent cursor-pointer"
                  />
                </div>

                {showTime && (
                  <div className="absolute top-20 z-50">
                    <TimePicker
                      selectedTime={selectedTime}
                      setSelectedTime={(time) => {
                        setSelectedTime(time);
                        setShowTime(false);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <button className="w-full cursor-pointer bg-black text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-gray-900 transition">
              Next
            </button>
          </div>

          <img
            src={watchImg}
            alt="watch"
            className="absolute right-0 bottom-0 w-72 object-contain"
          />
        </div>

        {/* RIGHT CARD */}
        <div className="w-[380px] bg-white border border-zinc-200 rounded-2xl p-4">
          <h3 className="text-2xl font-bold mb-4">Benefits</h3>

          <div className="space-y-4">
            <div className="flex gap-4 items-start border-b border-zinc-200 pb-5">
              <FaCalendarAlt className="text-xl text-gray-600 mt-1" />
              <p>Choose your exact pickup time up to 90 days in advance.</p>
            </div>

            <div className="flex gap-4 items-start border-b border-zinc-200 pb-5">
              <FaClock className="text-xl text-gray-600 mt-1" />
              <p>Extra wait time included to meet your ride.</p>
            </div>

            <div className="flex gap-4 items-start">
              <FaCreditCard className="text-xl text-gray-600 mt-1" />
              <p>Cancel at no charge up to 60 minutes in advance.</p>
            </div>
          </div>

          <p className="mt-4 underline cursor-pointer text-gray-600">
            See terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanForLater;
