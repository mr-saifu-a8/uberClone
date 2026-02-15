import React from "react";
import car from "../assets/images/car.png";
import car2 from "../assets/images/car2.png";
import bike from "../assets/images/bike.png";
import calanderTime from "../assets/images/calanderTime.png";
import carpasinger from "../assets/images/carpasinger.png";
import service from "../assets/images/service.png";

const Suggestions = () => {
  const data = [
    {
      title: "Ride",
      desc: "Go anywhere with Uber. Request a ride, hop in, and go.",
      img: car,
    },
    {
      title: "Reserve",
      desc: "Reserve your ride in advance so you can relax on the day of your trip.",
      img: calanderTime,
    },
    {
      title: "Intercity",
      desc: "Get convenient, affordable outstation cabs anytime at your door.",
      img: carpasinger,
    },
    {
      title: "Courier",
      desc: "Uber makes same-day item delivery easier than ever.",
      img: service,
    },
    {
      title: "Rentals",
      desc: "Request a trip for a block of time and make multiple stops.",
      img: car2,
    },
    {
      title: "Bike",
      desc: "Get affordable motorbike rides in minutes at your doorstep.",
      img: bike,
    },
  ];

  return (
    <div className="px-32 py-10 bg-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Suggestions</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 flex justify-between items-center"
          >
            {/* Left Content */}
            <div className="max-w-[60%]">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <button className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition">
                Details
              </button>
            </div>

            {/* Right Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
