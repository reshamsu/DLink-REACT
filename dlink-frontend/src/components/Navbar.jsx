import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  AiOutlineMenu, 
  AiOutlineClose, 
  AiOutlineDown, 
  AiOutlineUp 
} from "react-icons/ai";
import { MdApartment } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";
import { FaBuilding, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RiLandscapeFill } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import logo from "/dlink.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const location = useLocation();

  const handleNav = () => setNav(!nav);

  const linkClass = ({ isActive }) =>
    isActive ? "text-[#df8600] font-semibold" : "hover:text-[#df8600]";

  const isPropertyPage = location.pathname.startsWith("/property");

  const handleReload = (path) => {
    if (location.pathname === path) window.location.reload();
    setNav(false);
    setDesktopDropdown(false);
    setMobileDropdown(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xs bg-white text-gray-700">
      <div className="flex justify-between items-center h-22 max-w-[1200px] xl:px-0 p-6 md:px-6 py-6 mx-auto font-semibold">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center hover:text-[#f09712]"
          onClick={() => handleReload("/")}
        >
          <div className="flex items-center text-gray-800">
            <img src={logo} alt="" className="w-14 h-14 mr-3" />
            <div className="flex flex-col">
              <h1 className="w-fit flex items-center text-lg font-bold">
                D-LINK
              </h1>
              <span className="text-xs font-medium">Colombo</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <NavLink to="/" className={linkClass} onClick={() => handleReload("/")}>
              Home
            </NavLink>
          </li>

          {/* Desktop Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDesktopDropdown(!desktopDropdown)}
              className={`flex items-center gap-2 ${
                isPropertyPage ? "text-[#f09712] font-semibold" : "hover:text-[#f09712]"
              }`}
            >
              Find Property {desktopDropdown ? <FaChevronUp size={14}/> : <FaChevronDown size={14}/>}
            </button>
            {desktopDropdown && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-2xl rounded-xl p-6 z-40 min-w-[200px] border border-gray-200">
                <ul className="space-y-4 text-gray-700 font-medium">
                  <li>
                    <NavLink
                      to="/property/apartments"
                      className="flex items-center gap-3 hover:text-[#f09712]"
                      onClick={() => handleReload("/property/apartments")}
                    >
                      <MdApartment size={20} /> Apartments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/houses"
                      className="flex items-center gap-3 hover:text-[#f09712]"
                      onClick={() => handleReload("/property/houses")}
                    >
                      <BsFillHousesFill size={20} /> Houses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/commercial-properties"
                      className="flex items-center gap-3 hover:text-[#f09712]"
                      onClick={() => handleReload("/property/commercial-properties")}
                    >
                      <FaBuilding size={20} /> Commercial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/lands-plots"
                      className="flex items-center gap-3 hover:text-[#f09712]"
                      onClick={() => handleReload("/property/lands-plots")}
                    >
                      <RiLandscapeFill size={20} /> Lands / Plots
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/about" className={linkClass} onClick={() => handleReload("/about")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass} onClick={() => handleReload("/contact")}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Add Listing Button */}
        <div className="hidden md:block">
          <NavLink
            to="/listing/add-listing"
            className="px-5 py-2 rounded-lg flex items-center justify-center gap-1 text-white bg-[#000300] hover:scale-105 duration-300 transition-all"
            onClick={() => handleReload("/listing/add-listing")}
          >
            <IoIosAdd size={33} className="text-[#f09712]"/> Add Listing
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={handleNav}
          className="block md:hidden relative z-50 cursor-pointer text-[#f09712]"
        >
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`${
            nav
              ? "fixed left-0 top-0 w-[64%] h-full border-l border-l-gray-800 bg-white text-black ease-in-out shadow-2xl duration-500 z-[999]"
              : "fixed right-[-100%] z-[999]"
          }`}
        >
          <div className="flex items-center text-gray-800 py-7 px-7">
            <img src={logo} alt="" className="w-14 h-14 mr-3" />
            <div className="flex flex-col">
              <h1 className="w-fit flex items-center text-lg font-bold">D-LINK</h1>
              <span className="text-xs font-medium">Colombo</span>
            </div>
          </div>

          <ul className="px-4 font-medium">
            <li className="p-4 border-b border-gray-100">
              <NavLink to="/" className={linkClass} onClick={() => handleReload("/")}>
                Home
              </NavLink>
            </li>

            {/* Mobile Dropdown */}
            <li className="p-4 border-b border-gray-50">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setMobileDropdown(!mobileDropdown)}
              >
                <span
                  className={`${isPropertyPage ? "text-[#f09712] font-semibold" : "hover:text-[#f09712]"}`}
                >
                  Find Property
                </span>
                {mobileDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {mobileDropdown && (
                <ul className="pl-4 mt-6 space-y-4">
                  <li>
                    <NavLink
                      to="/property/apartments"
                      className="block hover:text-[#f09712] border-b border-gray-100 pb-2"
                      onClick={() => handleReload("/property/apartments")}
                    >
                      Apartments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/houses"
                      className="block hover:text-[#f09712] border-b border-gray-100 pb-2"
                      onClick={() => handleReload("/property/houses")}
                    >
                      Houses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/commercial-properties"
                      className="block hover:text-[#f09712] border-b border-gray-100 pb-2"
                      onClick={() => handleReload("/property/commercial-properties")}
                    >
                      Commercial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/lands-plots"
                      className="block hover:text-[#f09712]"
                      onClick={() => handleReload("/property/lands-plots")}
                    >
                      Lands / Plots
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="p-4 border-b border-gray-50">
              <NavLink to="/about" className={linkClass} onClick={() => handleReload("/about")}>
                About
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-50">
              <NavLink to="/contact" className={linkClass} onClick={() => handleReload("/contact")}>
                Contact
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/listing/add-listing"
                className="px-5 py-2 rounded-lg flex items-center justify-center gap-1 text-center text-white bg-[#f09712] hover:bg-[#ec6d06e8]"
                onClick={() => handleReload("/listing/add-listing")}
              >
                <IoIosAdd size={30} /> Add Listing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
