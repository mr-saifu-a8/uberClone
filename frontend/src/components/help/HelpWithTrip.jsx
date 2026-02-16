import React from "react";
import { CgMenu } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";

const tripTopics = [
  "Cancellations",
  "Fare review",
  "Cash payment issues",
  "Other payment support",
  "Lost item",
  "Delivery issues",
  "Feedback about the driver or vehicle",
  "Safety",
  "Uber Shuttle FAQ",
  "My Shuttle trip was cancelled",
  "I had an issue with a co-rider",
  "Uber Shuttle feedback",
  "Employee Transport Support",
  "Shuttle packages FAQ",
  "Uber Shuttle Promotions – FAQ",
];

const HelpWithTrip = () => {
  return (
    <div className="bg-black min-h-screen text-white px-16 pl-32 py-12">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-14">
        <a
          href="/"
          className="underline text-zinc-300 hover:text-white transition"
        >
          Home
        </a>

        <div className="bg-zinc-900 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-zinc-800 transition">
          <IoSearch size={20} />
        </div>
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-semibold mb-12">
        Help with a trip
      </h1>

      {/* List Section */}
      <div className="border-t border-zinc-800 divide-y divide-zinc-800 max-w-4xl">
        {tripTopics.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-6 cursor-pointer hover:bg-zinc-900 transition"
          >
            <div className="flex items-center gap-4 text-zinc-200">
              {index < 8 ? (
                <CgMenu size={20} className="text-zinc-400" />
              ) : (
                <FiFileText size={20} className="text-zinc-400" />
              )}
              <span className="text-lg">{item}</span>
            </div>

            <MdKeyboardArrowRight size={22} className="text-zinc-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpWithTrip;
