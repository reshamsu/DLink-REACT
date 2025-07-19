import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-600 font-semibold">
      <div className="max-w-[1240px] mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div>
            <NavLink
              to="/"
              className="flex items-center justify-center hover:text-[#f09712]"
            >
              <h1 className="w-fit text-2xl font-bold text-[#f09712]">
                D-LINK <span className="text-[18px]">Colombo</span>
              </h1>
            </NavLink>
            <p className="text-center py-4">POWER-LINK PROPERTIES</p>
            <ul className="flex justify-evenly items-center">
              <li>.</li>
              <li>.</li>
              <li>.</li>
              <li>.</li>
            </ul>
          </div>
          <div>
            <ul className="ml-8 md:ml-12">
              <li>LINK</li>
              <li>LINK</li>
              <li>LINK</li>
              <li>LINK</li>
            </ul>
          </div>
          <div>
            <ul className="ml-8 md:ml-12">
              <li>LINK</li>
              <li>LINK</li>
              <li>LINK</li>
              <li>LINK</li>
            </ul>
          </div>
          <div>
            <ul className="ml-8 md:ml-12">
              <li>LINK</li>
              <li>LINK</li>
              <li>LINK</li>
              <li>LINK</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-400">
            D-Link Colombo <FaRegCopyright className="inline mb-0.5" /> 2025.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
