import { useState } from "react";

const menuItems = [
  {
    label: "Ride",
    icon: (
      // Route/Navigation icon — two endpoints connected
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="2" fill="black" />
        <circle cx="18" cy="18" r="2" fill="black" />
        <path
          d="M6 8C6 8 6 14 12 14C18 14 18 8 18 8V16"
          stroke="black"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="4"
          y1="20"
          x2="8"
          y2="20"
          stroke="black"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Drive",
    icon: (
      // Steering wheel icon
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9.5" stroke="black" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="2.5" stroke="black" strokeWidth="2.2" />
        <line
          x1="12"
          y1="9.5"
          x2="12"
          y2="3"
          stroke="black"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="9.9"
          y1="10.7"
          x2="4.5"
          y2="7.5"
          stroke="black"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="14.1"
          y1="10.7"
          x2="19.5"
          y2="7.5"
          stroke="black"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="9.5"
          y1="13.5"
          x2="3"
          y2="13.5"
          stroke="black"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="14.5"
          y1="13.5"
          x2="21"
          y2="13.5"
          stroke="black"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Uber Eats",
    icon: (
      // Fork and knife icon
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 2v7c0 1.7-1.1 3.1-2.5 3.6V22H7V12.6C5.6 12.1 5 10.7 5 9V2h1.5v5h1V2H9v5h1V2H11zM16 2c-1.7 0-3 2-3 4.5V11h2v11h1.5V2H16z" />
      </svg>
    ),
  },
  {
    label: "Business",
    icon: (
      // Store/shop icon
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 7h16l-1.5-3h-13L4 7z" />
        <path d="M3 7v1.5C3 9.9 4.1 11 5.5 11S8 9.9 8 8.5C8 9.9 9.1 11 10.5 11S13 9.9 13 8.5C13 9.9 14.1 11 15.5 11S18 9.9 18 8.5c0 1.4 1.1 2.5 2.5 2.5h.5V20H3V7z" />
        <rect x="9" y="14" width="6" height="6" fill="white" />
      </svg>
    ),
  },
];

export default function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center font-sans antialiased">
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl w-96 py-4 px-0 overflow-hidden">
        {menuItems.map((item, index) => (
          <div key={item.label}>
            {/* Menu Row */}
            <button
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`w-full flex items-center justify-between px-8 py-6 transition-colors duration-150 ${
                hovered === index ? "bg-gray-50" : "bg-white"
              }`}
            >
              <span className="text-3xl font-bold text-black tracking-tight">
                {item.label}
              </span>
              <span>{item.icon}</span>
            </button>

            {/* Divider (not after last item) */}
            {index < menuItems.length - 1 && (
              <div className="mx-8 border-t border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
