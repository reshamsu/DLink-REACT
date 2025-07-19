import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiHouseLineFill } from "react-icons/pi";
import { MdApartment } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { RiLandscapeFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xs bg-white text-gray-700">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto font-semibold">
        <Link
          to="/"
          className="flex items-center hover:text-[#df8600] cursor-pointer"
        >
          <h1 className="w-fit text-2xl font-bold text-[#df8600]">
            D-LINK <span className="text-[18px]">Colombo</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex hover: duration-500 transition">
          <li className="p-6">
            <Link
              to="/"
              className="flex items-center hover:text-[#df8600] cursor-pointer"
            >
              Home
            </Link>
          </li>

          <li className="p-6 relative group">
            <div className="flex items-center hover:text-[#df8600] cursor-pointer">
              Find Property
            </div>
            <div className="absolute top-16 left-0 bg-white shadow-xl rounded-xl p-6 hidden group-hover:block z-40 min-w-[248px] border border-gray-100">
              <ul className="space-y-4 text-md font-medium text-gray-700">
                <li>
                  <Link
                    to="/property/apartments"
                    className="flex items-center gap-2 hover:text-[#df8600] cursor-pointer"
                  >
                    <MdApartment size={24} />
                    Apartments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/property/houses"
                    className="flex items-center gap-2 hover:text-[#df8600] cursor-pointer"
                  >
                    <BsFillHousesFill size={22} />
                    Houses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/property/villas"
                    className="flex items-center gap-2 hover:text-[#df8600] cursor-pointer"
                  >
                    <PiHouseLineFill size={22} />
                    Villas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/property/commercial-properties"
                    className="flex items-center gap-2 hover:text-[#df8600] cursor-pointer"
                  >
                    <FaBuilding size={22} />
                    Commercial Properties
                  </Link>
                </li>
                <li>
                  <Link
                    to="/property/lands-plots"
                    className="flex items-center gap-2 hover:text-[#df8600] cursor-pointer"
                  >
                    <RiLandscapeFill size={22} />
                    Lands / Plots
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="p-6">
            <Link
              to="/about"
              className="flex items-center hover:text-[#df8600] cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="p-6">
            <Link
              to="/contact"
              className="flex items-center hover:text-[#df8600] cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="px-6 py-2.5 ml-12 rounded-xl flex items-center text-center text-white bg-[#df8600] hover:bg-[#df9800e8] cursor-pointer"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={handleNav}
          className="block md:hidden relative z-50 cursor-pointer text-[#df8600]"
        >
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`${
            nav
              ? "fixed left-0 top-0 w-[64%] h-full border-l border-l-gray-800 bg-white ease-in-out duration-500 z-[999]"
              : "fixed right-[-100%] z-[999]"
          }`}
        >
          <h1 className="w-full text-2xl font-bold text-[#df8600] px-8 py-8">
            D-Link <span className="text-[18px]">Colombo</span>
          </h1>
          <ul className="px-4 font-medium">
            <li className="p-4 border-b border-gray-100">
              <Link to="/" className="cursor-pointer block">
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-100">
              <Link to="/property/apartments" className="cursor-pointer block">
                Apartments
              </Link>
            </li>
            <li className="p-4 border-b border-gray-100">
              <Link to="/property/houses" className="cursor-pointer block">
                Houses
              </Link>
            </li>
            <li className="p-4 border-b border-gray-100">
              <Link to="/property/villas" className="cursor-pointer block">
                Villas
              </Link>
            </li>
            <li className="p-4 border-b border-gray-100">
              <Link
                to="/property/commercial-properties"
                className="cursor-pointer block"
              >
                Commercial Properties
              </Link>
            </li>
            <li className="p-4 border-b border-gray-100">
              <Link to="/property/lands-plots" className="cursor-pointer block">
                Lands / Plots
              </Link>
            </li>
            <li className="p-4 border-b border-gray-100">
              <Link to="/about" className="cursor-pointer block">
                About
              </Link>
            </li>
            <li className="p-4">
              <Link to="/contact" className="cursor-pointer block">
                Contact
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/login"
                className="block w-full text-center px-8 mt-8 py-2.5 rounded-xl text-white bg-[#df8600] hover:bg-[#df9800e8] cursor-pointer"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
