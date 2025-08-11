import React from "react";
import Property from "../../assets/property.jpg";
import { LuShare } from "react-icons/lu";

const Hero = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-22 flex md:flex flex-col-reverse md:flex-col">
        <div className="pt-4 md:pt-10 mb-6 mx-5 md:mx-0 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Title Section */}
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-semibold">
              Modern Apartment in Dehiwela, Colombo
            </h1>
            <h2 className="block md:hidden pt-2 mb-1 text-gray-800 font-medium text-sm">
              Entire Serviced Apartment in Colombo, Sri Lanka
            </h2>
            <p className="py-1 text-xs md:text-sm font-normal text-gray-400">
              Updated: 9th Aug 2025
            </p>
          </div>

          {/* Share Button */}
          <button className="self-start md:self-center">
            <a
              href="#"
              className="text-gray-700 bg-gray-100 hover:bg-gray-200 py-2 px-3 hover:text-gray-800 border border-gray-400 hover:border-gray-600 rounded-xl font-medium flex items-center gap-2 md:gap-2 text-sm md:text-base"
            >
              <LuShare size={18} className="flex-shrink-0" />
              <span>Share</span>
            </a>
          </button>
        </div>

        <div className="rounded-none md:rounded-2xl flex items-start flex-col md:flex-row">
          <img
            src={Property}
            alt="listing"
            className="w-full md:w-[49.2%] rounded-none md:rounded-l-2xl"
          />
          <div className="hidden md:grid grid-cols-2 gap-3 md:mx-3 my-3 md:my-0">
            <img src={Property} alt="listing" className="" />
            <img
              src={Property}
              alt="listing"
              className="rounded-none md:rounded-tr-2xl"
            />
            <img src={Property} alt="listing" className="" />
            <img
              src={Property}
              alt="listing"
              className="rounded-none md:rounded-br-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
