import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiHouseLineFill } from "react-icons/pi";
import { MdApartment } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { RiLandscapeFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white text-gray-700">
      <div className="flex justify-between items-center h-24 max-w-[1260px] mx-auto px-4 font-semibold">
        <h1 className="w-fit text-2xl font-bold text-[#df8600]">
          D-LINK Colombo.
        </h1>
        <ul className="hidden md:flex hover: duration-500 transition">
          <li className="p-6">
            <a href="/" className="flex items-center hover:text-[#df8600]">
              Home
            </a>
          </li>
          <li className="p-6 relative group">
            <div className="flex items-center hover:text-[#df8600] cursor-pointer">
              Find Property
            </div>
            <div className="absolute top-16 left-0 bg-white shadow-lg rounded-xl p-6 hidden group-hover:block z-40 min-w-[248px] border-2 border-gray-300">
              <ul className="space-y-4 text-md font-medium text-gray-700">
                <li>
                  <a
                    href="/property/apartments"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <MdApartment size={24} />
                    Apartments
                  </a>
                </li>
                <li>
                  <a
                    href="/property/houses"
                    className="flex flex-row items-center gap-2 hover:text-[#df8600]"
                  >
                    <BsFillHousesFill size={22} />
                    Houses
                  </a>
                </li>
                <li>
                  <a
                    href="/property/villas"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <PiHouseLineFill size={22} />
                    Villas
                  </a>
                </li>
                <li>
                  <a
                    href="/property/commercial-properties"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <FaBuilding size={22} />
                    Commercial Properties
                  </a>
                </li>
                <li>
                  <a
                    href="/property/lands-plots"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <RiLandscapeFill size={22} />
                    Lands / Plots
                  </a>
                </li>
              </ul>
            </div>
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
            Login
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
