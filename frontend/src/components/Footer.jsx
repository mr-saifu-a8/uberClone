import React from "react";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black   text-white px-40  py-16">
      {/* Top Section */}
      <div className="mb-12 ">
        <h1 className="text-3xl font-semibold mb-6">Uber</h1>
        <p className="text-lg hover:underline cursor-pointer">
          Visit Help Center
        </p>
      </div>

      {/* Links Section */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Company */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Our offerings</li>
            <li className="hover:text-white cursor-pointer">Newsroom</li>
            <li className="hover:text-white cursor-pointer">Investors</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Uber One</li>
          </ul>
        </div>

        {/* Products */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Ride</li>
            <li className="hover:text-white cursor-pointer">Drive</li>
            <li className="hover:text-white cursor-pointer">Eat</li>
            <li className="hover:text-white cursor-pointer">
              Uber for Business
            </li>
            <li className="hover:text-white cursor-pointer">Uber Freight</li>
            <li className="hover:text-white cursor-pointer">Gift cards</li>
            <li className="hover:text-white cursor-pointer">Uber Health</li>
          </ul>
        </div>

        {/* Global citizenship */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Global citizenship</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Safety</li>
            <li className="hover:text-white cursor-pointer">Sustainability</li>
          </ul>
        </div>

        {/* Travel */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Travel</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Reserve</li>
            <li className="hover:text-white cursor-pointer">Airports</li>
            <li className="hover:text-white cursor-pointer">Cities</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center ">
        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <FaLinkedin className="cursor-pointer hover:text-gray-400" />
          <FaYoutube className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaXTwitter className="cursor-pointer hover:text-gray-400" />
        </div>

        {/* Language & Location */}
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
            <HiOutlineGlobeAlt className="text-xl" />
            <span>English</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
            <MdLocationOn className="text-xl" />
            <span>Bhopal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
