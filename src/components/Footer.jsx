import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "/dlink-colombo.png";

const Footer = () => {
  return (
    <div className="bg-gray-950 text-gray-300 border-t border-gray-900">
      <div className="max-w-7xl mx-auto py-10 px-6 2xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-evenly gap-4 ml-0 lg:ml-10 2xl:ml-0">
            <NavLink
              to="/"
              className="flex items-center hover:text-[#f09712]"
              onClick={() => handleReload("/")}
            >
              <div className="flex items-center justify-center gap-3">
                <img src={logo} alt="" className="w-14 h-14" />
                <div className="flex flex-col">
                  <h1 className="w-fit flex items-start text-lg font-bold">
                    D-LINK
                  </h1>
                  <span className="text-xs font-medium">Colombo</span>
                </div>
              </div>
            </NavLink>
            <label className="text-center text-sm font-bold tracking-wide">
              “More than real estate — it’s your next chapter.”
            </label>

            {/* Social Icons */}
            <ul className="flex gap-1 text-2xl text-gray-400">
              <li>
                <Link
                  to="https://wa.me/94773776603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex border rounded-2xl border-gray-900 p-2 hover:text-[#f09712] hover:border-gray-800"
                >
                  <FaWhatsapp />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex border rounded-2xl border-gray-900 p-2 hover:text-[#f09712] hover:border-gray-800"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex border rounded-2xl border-gray-900 p-2 hover:text-[#f09712] hover:border-gray-800"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex border rounded-2xl border-gray-900 p-2 hover:text-[#f09712] hover:border-gray-800"
                >
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:info@dlink.com"
                  className="flex border rounded-2xl border-gray-900 p-2 hover:text-[#f09712] hover:border-gray-800"
                >
                  <HiOutlineMail />
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm md:text-md my-4 text-gray-400 px-4">
            <ul className="ml-0 lg:ml-10">
              <h3 className="font-semibold mb-4 text-gray-300 text-lg">
                Properties
              </h3>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Apartments
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Houses
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Lands
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Commercial
              </li>
            </ul>

            <ul className="ml-0 lg:ml-10">
              <h3 className="font-semibold mb-4 text-gray-300 text-lg">
                Support
              </h3>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                FAQ
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Help Center
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                How it works
              </li>
            </ul>

            <ul className="ml-0 lg:ml-10">
              <h3 className="font-semibold mb-4 text-gray-300 text-lg">
                Legal
              </h3>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Privacy Policy
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Terms & Conditions
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Cookie Policy
              </li>
            </ul>

            <ul className="ml-0 lg:ml-10">
              <h3 className="font-semibold mb-4 text-gray-300 text-lg">
                Company
              </h3>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                About Us
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Contact Us
              </li>
              <li className="mb-3 hover:text-[#f09712] hover:underline cursor-pointer">
                Blog / News
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-sm md:text-md text-gray-500">
            D-Link Colombo <FaRegCopyright className="inline mb-0.5" /> 2025.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
