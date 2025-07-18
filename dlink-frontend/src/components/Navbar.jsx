import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiHouseLineFill } from "react-icons/pi";
import { MdApartment } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";
import { RiLandscapeFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white text-gray-700">
      <div className="flex justify-between items-center h-24 max-w-[1260px] mx-auto px-4 font-semibold">
        <h1 className="w-fit text-2xl font-bold text-[#df8600]">D-LINK.</h1>
        <ul className="hidden md:flex hover: duration-500 transition">
          <li className="p-6">
            <a href="/" className="flex items-center hover:text-[#df8600]">
              Home
            </a>
          </li>
          <li className="p-6">
            <a href="/" className="flex items-center hover:text-[#df8600]">
              Find Property
            </a>
          </li>
          <li className="p-6">
            <a href="/" className="flex items-center hover:text-[#df8600]">
              About
            </a>
          </li>
          <li className="p-6">
            <a href="/" className="flex items-center hover:text-[#df8600]">
              Contact
            </a>
          </li>
        </ul>
        <button>
          <a
            href="/"
            className="px-6 py-2.5 rounded-xl flex items-center text-center text-white bg-[#df8600] hover:bg-[#df9800e8]"
          >
            Contact Us
          </a>
        </button>
        <div onClick={handleNav} className="block md:hidden relative z-50">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={22} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-l border-l-gray-800 bg-white ease-in-out duration-500"
              : "fixed right-[-100%]"
          }
        >
          <h1 className="w-full text-2xl font-bold text-[#df8600] px-10 py-8">
            D-Link Colombo.
          </h1>
          <ul className="px-8">
            <li className="p-4 border-b border-gray-100">Home</li>
            <li className="p-4 border-b border-gray-100">Services</li>
            <li className="p-4 border-b border-gray-100">Property</li>
            <li className="p-4 border-b border-gray-100">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
