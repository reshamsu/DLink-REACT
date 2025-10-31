import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TbMenu, TbX, TbPlus, TbChevronUp, TbChevronDown, TbBuildingSkyscraper, TbHome, TbBuildings, TbMap } from "react-icons/tb";
import logo from "/dlink-colombo.png";

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
    <div className="fixed top-0 left-0 w-full z-50 shadow-xs bg-white text-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 2xl:px-0">
        <NavLink
          to="/"
          className="flex items-center hover:text-orange-400 mr-10"
          onClick={() => handleReload("/")}
        >
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-12 h-12" />
            <div className="flex flex-col">
              <h1 className="w-fit flex items-center text-lg font-bold">
                D-LINK
              </h1>
              <span className="text-sm font-medium text-orange-400">
                Colombo
              </span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden text-[14px] font-medium lg:flex items-center gap-10">
          <li>
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => handleReload("/")}
            >
              Home
            </NavLink>
          </li>

          {/* Desktop Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDesktopDropdown(!desktopDropdown)}
              className={`flex items-center gap-1 ${
                isPropertyPage
                  ? "text-orange-400 font-semibold"
                  : "hover:text-orange-400"
              }`}
            >
              Find Property{" "}
              {desktopDropdown ? (
                <TbChevronUp size={20} />
              ) : (
                <TbChevronDown size={20} />
              )}
            </button>
            {desktopDropdown && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-2xl rounded-xl p-6 z-40 min-w-[200px] border border-gray-200">
                <ul className="space-y-4">
                  <li>
                    <NavLink
                      to="/property/apartments"
                      className="flex items-center gap-2 hover:text-orange-400"
                      onClick={() => handleReload("/property/apartments")}
                    >
                      <TbBuildingSkyscraper size={22} /> Apartments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/houses"
                      className="flex items-center gap-2 hover:text-orange-400"
                      onClick={() => handleReload("/property/houses")}
                    >
                      <TbHome size={20} /> Houses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/commercial-properties"
                      className="flex items-center gap-2 hover:text-orange-400"
                      onClick={() =>
                        handleReload("/property/commercial-properties")
                      }
                    >
                      <TbBuildings size={20} /> Commercial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/lands-plots"
                      className="flex items-center gap-3 hover:text-orange-400"
                      onClick={() => handleReload("/property/lands-plots")}
                    >
                      <TbMap size={20} /> Lands / Plots
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => handleReload("/about")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={linkClass}
              onClick={() => handleReload("/services")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => handleReload("/contact")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Add Listing Button */}

        <div className="hidden md:block">
          <NavLink
            to="/listing/add-listing"
            className="px-5 py-2.5 pr-6 rounded-full flex items-center justify-center gap-1.5 hover:gap-2 font-medium hover:gap-2 text-white bg-orange-400 hover:bg-orange-400/90 hover:scale-105 duration-300 transition-all"
            onClick={() => handleReload("/listing/add-listing")}
          >
            <TbPlus size={22} /> Add Listing
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={handleNav}
          className="block md:hidden relative z-50 cursor-pointer text-orange-400"
        >
          {nav ? <TbX size={30} /> : <TbMenu size={30} />}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`${
            nav
              ? "fixed left-0 top-0 w-[64%] h-full border-l bg-white flex flex-col justify-between text-gray-800 ease-in-out shadow-2xl duration-500 z-[999]"
              : "fixed right-[-100%] z-[999]"
          }`}
        >
          <ul className="px-4 font-medium">
            <div className="flex items-center py-8 px-3">
              <img src={logo} alt="" className="w-14 h-14 mr-3" />
              <div className="flex flex-col">
                <h1 className="w-fit flex items-center text-lg font-bold">
                  D-LINK
                </h1>
                <span className="text-xs font-medium">Colombo</span>
              </div>
            </div>
            <li className="p-4 border-b border-gray-100">
              <NavLink
                to="/"
                className={linkClass}
                onClick={() => handleReload("/")}
              >
                Home
              </NavLink>
            </li>

            {/* Mobile Dropdown */}
            <li className="p-4 border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setMobileDropdown(!mobileDropdown)}
              >
                <span
                  className={`${
                    isPropertyPage
                      ? "text-[#f09712] font-semibold"
                      : "hover:text-[#f09712]"
                  }`}
                >
                  Find Property
                </span>
                {mobileDropdown ? <TbChevronUp /> : <TbChevronDown />}
              </button>
              {mobileDropdown && (
                <ul className="pl-3 mt-4 space-y-4 text-sm">
                  <li>
                    <NavLink
                      to="/property/apartments"
                      className="flex items-center gap-3 hover:text-[#f09712] border-b border-t border-gray-100 py-4"
                      onClick={() => handleReload("/property/apartments")}
                    >
                      <TbBuildingSkyscraper size={22} /> Apartments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/houses"
                      className="flex items-center gap-3 hover:text-[#f09712] border-b border-gray-100 pb-4"
                      onClick={() => handleReload("/property/houses")}
                    >
                      <TbHome size={20} /> Houses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/commercial-properties"
                      className="flex items-center gap-3 hover:text-[#f09712] border-b border-gray-100 pb-4"
                      onClick={() =>
                        handleReload("/property/commercial-properties")
                      }
                    >
                      <TbBuildings size={20} /> Commercial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property/lands-plots"
                      className="flex items-center gap-3 hover:text-[#f09712]"
                      onClick={() => handleReload("/property/lands-plots")}
                    >
                      <TbMap size={20} /> Lands / Plots
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="p-4 border-b border-gray-100">
              <NavLink
                to="/about"
                className={linkClass}
                onClick={() => handleReload("/about")}
              >
                About
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-100">
              <NavLink
                to="/services"
                className={linkClass}
                onClick={() => handleReload("/services")}
              >
                Services
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-100">
              <NavLink
                to="/contact"
                className={linkClass}
                onClick={() => handleReload("/contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <Link className="flex justify-center w-full p-8">
            <NavLink
              to="/listing/add-listing"
              className="px-6 py-3 pr-8 rounded-full flex items-center justify-center gap-1 hover:gap-2 text-white bg-[#f09712] hover:bg-[#ec6d06e8] hover:scale-105 duration-300 transition-all"
              onClick={() => handleReload("/listing/add-listing")}
            >
              <TbPlus size={30} /> Add Listing
            </NavLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
