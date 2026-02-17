import { useState } from "react";
import { MdDirectionsCar, MdStorefront } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";

const menuItems = [
  {
    label: "Ride",
    icon: <MdDirectionsCar className="text-[28px] text-black" />,
  },
  {
    label: "Drive",
    icon: <TbSteeringWheel className="text-[28px] text-black" />,
  },
  {
    label: "Uber Eats",
    icon: <IoRestaurant className="text-[26px] text-black" />,
  },
  {
    label: "Business",
    icon: <MdStorefront className="text-[28px] text-black" />,
  },
];

export default function SignupDropdown() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center font-sans antialiased">
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl w-50 px-0 overflow-hidden">
        {menuItems.map((item, index) => (
          <div key={item.label}>
            {/* Menu Row */}
            <button
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`w-full flex items-center justify-between px-8 py-5  duration-150 ${
                hovered === index ? "text-gray-500" : "bg-white"
              }`}
            >
              <span className="text-xl font-bold cursor-pointer tracking-tight">
                {item.label}
              </span>
              <span>{item.icon}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
