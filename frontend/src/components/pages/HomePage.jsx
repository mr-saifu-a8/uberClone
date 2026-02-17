import React from "react";
import { MdLocationOn } from "react-icons/md";
import model1 from "../../assets/images/model1.webp";
import model9 from "../../assets/images/model9.png";
import bage from "../../assets/images/bage.svg";
import { BsFillClockFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSendFill } from "react-icons/bs";
import Suggestions from "../../components/Suggestions";
import PlanForLater from "../../components/PlanForLater";
import HeroPages from "../../components/HeroPages";
import Navbar from "../Navbar";
import Footer from './../Footer';
const HomePage = () => {
  return (
    <div className="">
      <Navbar/>
      <div className="h-16  flex  justify-between px-32 items-center">
        <h1 className="font-bold text-2xl">Ride</h1>
        <div className="flex  items-center gap-4 text-zinc-600">
          <h2 className="hover:text-black cursor-pointer">Request a ride</h2>
          <h2 className="hover:text-black cursor-pointer">Reserve a ride</h2>
          <h2 className="hover:text-black cursor-pointer">See prices</h2>
          <h2 className="hover:text-black cursor-pointer">
            Explore ride options
          </h2>
          <h2 className="hover:text-black cursor-pointer">Airport rides</h2>
        </div>
      </div>

      <div className="flex mt-5 justify-center gap-5 items-center  py-5">
        {/* LEFT SECTION */}
        <div className="w-[40%] min-h-[80vh] flex flex-col gap-5">
          {/* Location */}
          <div className="flex items-center gap-1 text-sm">
            <MdLocationOn className="text-lg" />
            <h1 className="font-medium">Bhopal, IN</h1>
            <h2 className="underline cursor-pointer text-gray-600">
              Change city
            </h2>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-bold leading-15">
            Request a ride for now or later
          </h1>

          {/* Offer */}
          <div className="flex items-start gap-3  p-3 rounded-lg">
            <img src={bage} alt="" className="w-6 h-6" />
            <p className="text-sm text-gray-700">
              Up to 50% off your first 5 Uber rides. T&Cs apply.*
              <br />
              <span className="text-gray-500 text-xs">
                Valid within 15 days of signup.
              </span>
            </p>
          </div>

          {/* Pickup Now Dropdown */}
          <div className="flex items-center justify-between bg-gray-200 px-4 py-3 rounded-full w-fit cursor-pointer">
            <div className="flex items-center gap-3">
              <BsFillClockFill />
              <h1 className="font-medium">Pickup now</h1>
            </div>
            <RiArrowDropDownLine className="text-2xl" />
          </div>

          {/* Input Fields */}
          <div className="w-[70%]  mt-10 relative">
            {/* Vertical Line */}
            <div className="absolute z-5 left-10 h-16 top-8 bottom-8 w-0.5 bg-black"></div>
            <div className="flex flex-col gap-3">
              {/* PICKUP */}
              <div className="relative flex items-center bg-[#EDEDED]  rounded-2xl px-8 py-2.5">
                {/* Circle */}
                <div className="w-4 h-4 border-2 border-black rounded-full bg-white z-10"></div>

                <div className="relative flex-1 ml-4">
                  <input
                    type="text"
                    placeholder=" "
                    className="
            peer w-full bg-transparent outline-none
            text-sm text-black
            pt-4 pb-1
          "
                  />

                  <label className=" absolute left-0 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-200 ease-in-out pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-black peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs bg-[#EDEDED] px-1">
                    Pickup location
                  </label>
                </div>

                <BsSendFill className="ml-3 text-black text-lg" />
              </div>

              {/* DROPOFF */}
              <div className="relative flex items-center bg-[#EDEDED]  rounded-2xl px-8 py-2.5">
                {/* Square */}
                <div className="w-4 h-4 bg-black z-10"></div>

                <div className="relative flex-1 ml-4">
                  <input
                    type="text"
                    placeholder=" "
                    className="
            peer w-full bg-transparent outline-none
            text-sm text-black
            pt-4 pb-1
          "
                  />

                  <label
                    className="
            absolute left-0 top-1/2 -translate-y-1/2
            text-sm text-gray-500
            transition-all duration-200 ease-in-out
            pointer-events-none
            peer-focus:top-1 peer-focus:text-xs peer-focus:text-black
            peer-not-placeholder-shown:top-1
            peer-not-placeholder-shown:text-xs
            bg-[#EDEDED] px-1
          "
                  >
                    Dropoff location
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="bg-black text-white p-3 px-4 w-fit  rounded-lg text-lg font-medium hover:bg-gray-900 transition">
            See prices
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-[40%] h-[80vh]">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={model1}
            alt=""
          />
        </div>
      </div>

      <Suggestions />

      <div className="w-full  py-20">
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Log in to see your account details
            </h1>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              View past trips, tailored suggestions, support resources, and
              more.
            </p>

            <div className="flex items-center gap-8">
              <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
                Log in to your account
              </button>

              <button className="text-lg underline underline-offset-4">
                Create an account
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className=" rounded-2xl  w-130 flex justify-center">
            <img
              src={model9}
              alt="login illustration"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      <PlanForLater />
      <HeroPages />
      <Footer
    </div>
  );
};

export default HomePage;
