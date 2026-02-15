import React, { useState, useRef, useEffect } from "react";
import { TbWorld } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/images/logo.svg";
import AboutDropDown from "./AboutDropDown";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-16 sticky w-full flex px-32 justify-between bg-black text-white items-center">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Uber Logo" />

        <h3 className="cursor-pointer py-2 hover:bg-zinc-900 rounded-full px-3">
          Ride
        </h3>
        <h3 className="cursor-pointer py-2 hover:bg-zinc-900 rounded-full px-3">
          Drive
        </h3>
        <h3 className="cursor-pointer py-2 hover:bg-zinc-900 rounded-full px-3">
          Business
        </h3>

        <div ref={dropdownRef} className="relative">
          <h3
            onClick={() => setToggle((prev) => !prev)}
            className="flex cursor-pointer items-center gap-1 py-2 hover:bg-zinc-900 rounded-full px-3"
          >
            About <RiArrowDropDownLine size={25} />
          </h3>

          {toggle && <AboutDropDown />}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <h2 className="flex py-2 hover:bg-zinc-900 rounded-full px-3 items-center gap-1">
          <TbWorld size={18} /> EN
        </h2>

        <h2 className="py-2 hover:bg-zinc-900 rounded-full px-3">
          Help
        </h2>

        <button className="py-2 hover:bg-zinc-900 rounded-full px-3">
          Log in
        </button>

        <button className="py-2 bg-white text-black font-[font3-medium] rounded-full px-3">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
