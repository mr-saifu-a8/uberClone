import React from "react";
import model20 from "../assets/images/model20.svg";
import { FaUser, FaCar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdCalendarToday } from "react-icons/md";

const ActivityPage = () => {
  return (
    <div className="min-h-screen flex justify-between h-full bg-[#f6f6f6] px-24 py-10">
      <div className="flex  mt-2  w-[20%] h-fit justify-between items-center ">
        <p className=" text-gray-700 font-medium">Tax profile</p>
      </div>

      <div className="w-[80%]">
        <div className="flex mb-8 justify-between items-center w-full">
          {/* Title */}
          <h1 className="text-5xl font-semibold ">Past</h1>
          {/* Right */}
          <div className="flex gap-4">
            <button className="flex h-fit items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium transition">
              <FaUser className="text-black text-xs" />
              Personal
              <IoIosArrowDown className="text-black text-sm" />
            </button>

            <button className="flex h-fit items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium transition">
              <MdCalendarToday className="text-black text-xs" />
              All Trips
              <IoIosArrowDown className="text-black text-sm" />
            </button>
          </div>
        </div>

        {/* Card Section */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Image */}
          <img
            src={model20}
            alt="Ride banner"
            className="w-full  object-cover"
          />

          {/* Content */}
          <div className="px-8 py-6">
            <h2 className="text-xl font-semibold mb-2">
              You have not taken any rides yet, take your first ride
            </h2>

            <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-5 py-2.5 rounded-full text-sm font-medium transition">
              <FaCar className="text-black text-xs" />
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
