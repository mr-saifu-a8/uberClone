import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const AboutDropDown = () => {
  const mainMenu = [
    "About us",
    "Our offerings",
    "How Uber works",
    "Sustainability",
    "Explore",
    "Newsroom",
    "Investor relations",
    "Autonomous",
    "Blog",
    "Careers",
  ];

  const exploreMenu = [
    "Airports",
    "Courier services",
    "Intercity routes",
    "Popular routes",
    "Taxis",
  ];

  return (
    <div className="relative w-max">
      <div className="absolute top-4 left-0 w-46 bg-white rounded-xl shadow-xl py-1">
        {mainMenu.map((item, index) =>
          item === "Explore" ? (
            // Explore with Submenu
            <div key={index} className="group relative">
              <div className="flex justify-between items-center px-2 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer text-sm font-medium">
                <span>{item}</span>
                <HiOutlineChevronRight size={15} />
              </div>

              {/* Submenu */}
              <div className="absolute top-0  left-full ml-2 w-44 bg-white rounded-xl shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {exploreMenu.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex justify-between items-center px-6 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer text-sm font-medium"
                  >
                    <span>{subItem}</span>
                    <HiOutlineChevronRight size={12} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="px-3  py-2 text-gray-600 hover:bg-gray-100 cursor-pointer text-sm font-medium"
            >
              {item}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default AboutDropDown;
