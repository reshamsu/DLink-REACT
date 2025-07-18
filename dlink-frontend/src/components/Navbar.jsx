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
          D-LINK <span className="text-[18px]">Colombo</span>
        </h1>

        {/* Desktop Navigation */}
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
            <div className="absolute top-16 left-0 bg-white shadow-xl rounded-xl p-6 hidden group-hover:block z-40 min-w-[248px] border-1 border-gray-100">
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
                    className="flex items-center gap-2 hover:text-[#df8600]"
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
            <a href="/about" className="flex items-center hover:text-[#df8600]">
              About
            </a>
          </li>
          <li className="p-6">
            <a
              href="/contact"
              className="flex items-center hover:text-[#df8600]"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <a
            href="/login"
            className="px-6 py-2.5 ml-22 rounded-xl flex items-center text-center text-white bg-[#df8600] hover:bg-[#df9800e8]"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="block md:hidden relative z-50">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={22} />}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`${
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-l border-l-gray-800 bg-white ease-in-out duration-500 z-[999]"
              : "fixed right-[-100%] z-[999]"
          }`}
        >
          <h1 className="w-full text-2xl font-bold text-[#df8600] px-8 py-8">
            D-Link <span className="text-[18px]">Colombo</span>
          </h1>
          <ul className="px-4">
            <li className="p-4 border-b border-gray-100">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b border-gray-100">
              <a href="/property/apartments">Apartments</a>
            </li>
            <li className="p-4 border-b border-gray-100">
              <a href="/property/houses">Houses</a>
            </li>
            <li className="p-4 border-b border-gray-100">
              <a href="/property/villas">Villas</a>
            </li>
            <li className="p-4 border-b border-gray-100">
              <a href="/property/commercial-properties">
                Commercial Properties
              </a>
            </li>
            <li className="p-4 border-b border-gray-100">
              <a href="/property/lands-plots">Lands / Plots</a>
            </li>
            <li className="p-4 border-b border-gray-100">
              <a href="/about">About</a>
            </li>
            <li className="p-4 border-b border-gray-100">
              <a href="/contact">Contact</a>
            </li>
            <li className="p-4">
              <a
                href="/login"
                className="block w-full text-center px-6 py-2.5 rounded-xl text-white bg-[#df8600] hover:bg-[#df9800e8]"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
