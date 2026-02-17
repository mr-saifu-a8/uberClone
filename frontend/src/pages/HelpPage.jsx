import React from "react";
import { IoIosCar } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { Mail } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import model19 from "../assets/images/model19.png";
import { Link } from "react-router-dom";

const topics = [
  { icon: <IoIosCar size={20} />, title: "Help with a trip" },
  { icon: <CgMenu size={20} />, title: "Account" },
  { icon: <CgMenu size={20} />, title: "Membership" },
  { icon: <CgMenu size={20} />, title: "Accessibility" },
  { icon: <CgMenu size={20} />, title: "Grievance redressal" },
  { icon: <CgMenu size={20} />, title: "Guides" },
  { icon: <CgMenu size={20} />, title: "Shuttle" },
  { icon: <CgMenu size={20} />, title: "Cancellation policy" },
  { icon: <CgMenu size={20} />, title: "Map issue" },
];

const HelpPage = () => {
  return (
    <div className="bg-black  min-h-screen text-white pl-32  py-14">
      <div className="flex justify-between gap-16">
        {/* LEFT SECTION */}
        <div className="w-[60%]">
          {/* Heading */}
          <Link to='/' className="text-xl  mb-10">Home</Link>
          <h1 className="text-5xl font-semibold leading-tight mb-10">
            Support Resources for Uber Riders
          </h1>

          {/* Search Bar */}
          <div className="flex items-center bg-zinc-900 rounded-md overflow-hidden w-full max-w-2xl mb-14 border border-zinc-800">
            <div className="px-4 text-zinc-400">
              <IoSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Search questions, keywords, topics"
              className="bg-transparent flex-1 py-4 outline-none text-sm placeholder:text-zinc-500"
            />
            <button className="bg-zinc-300 text-black px-6 py-4 font-medium hover:bg-white transition">
              Search
            </button>
          </div>

          {/* Topics */}
          <h2 className="text-2xl font-semibold mb-6">All topics</h2>

          <div className="divide-y divide-zinc-800 border-t border-zinc-800">
            {topics.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-6 cursor-pointer hover:bg-zinc-900 transition"
              >
                <div className="flex items-center gap-4 text-zinc-200">
                  {item.icon}
                  <span className="text-lg">{item.title}</span>
                </div>
                <MdKeyboardArrowRight size={22} className="text-zinc-500" />
              </div>
            ))}
          </div>

          {/* Support Messages */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Support messages</h2>

            <div className="flex justify-between items-center py-6 border-t border-b border-zinc-800 cursor-pointer hover:bg-zinc-900 transition">
              <div className="flex items-center gap-4">
                <Mail size={20} />
                <span className="text-lg">View all messages</span>
              </div>
              <MdKeyboardArrowRight size={22} className="text-zinc-500" />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (IMAGE) */}
        <div className="w-[40%] flex justify-center items-start">
          <div className="bg-zinc-200 ">
            <img
              src={model19}
              alt="Support illustration"
              className="w-[320px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
