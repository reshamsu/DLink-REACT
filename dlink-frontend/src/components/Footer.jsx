import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "/dlink.png";

const Footer = () => {
  return (
    <div className="bg-gray-950 text-gray-300 border-t border-gray-900">
      <div className="max-w-[1240px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          <div className="flex flex-col items-center justify-evenly">
            <NavLink
              to="/"
              className="flex items-start hover:text-[#f09712]"
              onClick={() => handleReload("/")}
            >
              <div className="flex items-center">
                <img src={logo} alt="" className="w-14 h-14 mr-3" />
                <div className="flex flex-col">
                  <h1 className="w-fit flex items-center text-lg font-bold">
                    D-LINK
                  </h1>
                  <span className="text-xs font-medium">Colombo</span>
                </div>
              </div>
            </NavLink>
            <label className="mt-4 font-semibold tracking-wide">
              D-LINK PROPERTIES.
            </label>

            {/* Social Icons */}
            <div className="flex gap-6 mt-4 text-gray-400">
              <FaWhatsapp
                className="cursor-pointer hover:text-[#f09712]"
                size={22}
              />
              <FaFacebook
                className="cursor-pointer hover:text-[#f09712]"
                size={22}
              />
              <FaInstagram
                className="cursor-pointer hover:text-[#f09712]"
                size={22}
              />
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-md my-4 text-gray-400 px-4">
            <ul className="ml-0 lg:ml-10">
              <h3 className="font-semibold mb-4 text-gray-300 text-md">
                Properties
              </h3>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Apartments
              </li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Houses
              </li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Lands
              </li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Commercial
              </li>
            </ul>

            <ul className="ml-0 lg:ml-10">
              <h3 className="font-semibold mb-4 text-gray-300 text-md">
                Support
              </h3>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">FAQ</li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Help Center
              </li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                How it works
              </li>
            </ul>

            <ul className="ml-0 lg:ml-10">
              <h3 className="font-semibold mb-4 text-gray-300 text-md">
                Legal
              </h3>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Privacy Policy
              </li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Terms & Conditions
              </li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Cookie Policy
              </li>
            </ul>

            <ul className="ml-0 lg:ml-10">
              <h3 className="font-semibold mb-4 text-gray-300 text-md">
                Company
              </h3>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                About Us
              </li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Contact Us
              </li>
              <li className="mb-3 hover:text-[#f09712] cursor-pointer">
                Blog / News
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-500">
            D-Link Colombo <FaRegCopyright className="inline mb-0.5" /> 2025.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
