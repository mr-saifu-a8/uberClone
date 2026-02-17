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
    <div className="bg-white rounded-3xl shadow-2xl w-52 overflow-hidden">
      {menuItems.map((item, index) => (
        <div key={item.label}>
          <button
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`w-full flex items-center text-black justify-between px-6 py-4 transition-all duration-150 ${
              hovered === index ? "bg-gray-100 text-gray-700" : "bg-white"
            }`}
          >
            <span className="text-lg font-bold tracking-tight">
              {item.label}
            </span>
            <span>{item.icon}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
