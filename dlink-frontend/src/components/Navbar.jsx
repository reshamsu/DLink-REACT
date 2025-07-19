import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiHouseLineFill } from "react-icons/pi";
import { MdApartment } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { RiLandscapeFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const handleNav = () => setNav(!nav);

  const linkClass = ({ isActive }) =>
    isActive ? "text-[#df8600] font-semibold" : "hover:text-[#df8600]";

  const isPropertyPage = location.pathname.startsWith("/property");

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xs bg-white text-gray-700">
      <div className="flex justify-between items-center h-22 max-w-[1240px] xl:px-0 p-6 md:px-6 py-6 mx-auto font-semibold">
        <NavLink to="/" className="flex items-center hover:text-[#df8600]">
          <h1 className="w-fit text-2xl font-bold text-[#df8600]">
            D-LINK <span className="text-[18px]">Colombo</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex hover: duration-500 transition">
          <li className="p-6">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

          <li className="p-6 relative group">
            <div
              className={`flex items-center cursor-pointer ${
                isPropertyPage
                  ? "text-[#df8600] font-semibold"
                  : "hover:text-[#df8600]"
              }`}
            >
              Find Property
            </div>
            <div className="absolute top-16 left-0 bg-white shadow-xl rounded-xl p-6 hidden group-hover:block z-40 min-w-[260px] border border-gray-100">
              <ul className="space-y-4 text-md font-medium text-gray-700">
                <li>
                  <NavLink
                    to="/property/apartments"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <MdApartment size={22} />
                    <span>Apartments</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/property/houses"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <BsFillHousesFill size={20} />
                    <span>Houses</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/property/villas"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <PiHouseLineFill size={20} />
                    <span>Villas</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/property/commercial-properties"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <FaBuilding size={20} />
                    <span>Commercial Properties</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/property/lands-plots"
                    className="flex items-center gap-2 hover:text-[#df8600]"
                  >
                    <RiLandscapeFill size={20} />
                    <span>Lands / Plots</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="p-6">
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li className="p-6">
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <NavLink
            to="/login"
            className="px-6 py-2.5 lg:ml-12 md:ml-0 rounded-xl flex items-center text-center text-white bg-[#df8600] hover:bg-[#df9800e8]"
          >
            Sign In
          </NavLink>
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
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-100">
              <NavLink to="/property/apartments" className={linkClass}>
                Apartments
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-100">
              <NavLink to="/property/houses" className={linkClass}>
                Houses
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-100">
              <NavLink to="/property/villas" className={linkClass}>
                Villas
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-100">
              <NavLink
                to="/property/commercial-properties"
                className={linkClass}
              >
                Commercial
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-100">
              <NavLink to="/property/lands-plots" className={linkClass}>
                Lands / Plots
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-100">
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/login"
                className="block w-full text-center px-8 mt-8 py-2.5 rounded-xl text-white bg-[#df8600] hover:bg-[#df9800e8]"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
