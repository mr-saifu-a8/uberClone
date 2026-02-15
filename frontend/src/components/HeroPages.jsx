import React from "react";
import model12 from "../assets/images/model12.webp";
import model11 from "../assets/images/model11.webp";
import model18 from "../assets/images/model18.png";
import model14 from "../assets/images/model14.webp";

const HeroPages = () => {
  return (
    <div className="w-full flex px-22 flex-col gap-20 bg-[#f6f6f6] py-16">
      <div className="  flex items-center justify-around ">
        {/* LEFT IMAGE */}
        <div className="w-[40%]">
          <img
            src={model12}
            alt="Drive illustration"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[40%] ">
          <h1 className="text-[3vw] font-bold leading-tight mb-6">
            Drive when you want, make what you need
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Make money on your schedule with deliveries or rides—or both. You
            can use your own car or choose a rental through Uber.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-black text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
              Get started
            </button>

            <button className="relative text-lg text-zinc-600 group">
              <span className="relative">
                Already have an account? Sign in
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-around ">
        {/* LEFT IMAGE */}
        <div className="w-[40%] ">
          <h1 className="text-[3vw] font-bold leading-tight mb-6">
            The Uber you know, reimagined for business
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Uber for Business is a platform for managing global rides and meals,
            and local deliveries, for companies of any size.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-black text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
              Get started
            </button>

            <button className="relative text-lg text-zinc-600 group">
              <span className="relative">
                Learn more Check out our solutions
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[40%]">
          <img
            src={model14}
            alt="Drive illustration"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
      <div className="  flex items-center justify-around ">
        {/* LEFT IMAGE */}
        <div className="w-[40%]">
          <img
            src={model11}
            alt="Drive illustration"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[40%] ">
          <h1 className="text-[3vw] font-bold leading-tight mb-6">
            Make money by renting out your car
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Connect with thousands of drivers and earn more per week with Uber’s
            free fleet management tools.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-black text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-around ">
        {/* LEFT IMAGE */}
        <div className="w-[40%] ">
          <h1 className="text-[3vw] font-bold leading-tight mb-6">
            Use your skills to earn anytime, from anywhere
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Turn your expertise into a remote earning opportunity with Uber AI
            Solutions. Across all types of fields, our platform can help you
            make the most of your skills.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-black text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
              Sign Up
            </button>
            <button className="relative text-lg text-zinc-600 group">
              <span className="relative">
                Learn more
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[40%]">
          <img
            src={model18}
            alt="Drive illustration"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPages;
