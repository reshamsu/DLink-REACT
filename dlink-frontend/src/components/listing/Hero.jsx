import React from "react";
import Property from "../../assets/property.jpg";
import { LuDot } from "react-icons/lu";
import { LuShare } from "react-icons/lu";

const Hero = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-22 md:flex flex-col-reverse md:flex-col">
        <div className="pt-10 mb-6">
          <h1 className="text-2xl font-medium">
            Modern Apartment in Dehiwela, Colombo
          </h1>
          <p className="py-1 text-sm font-normal text-gray-400">
            Updated: 9th Aug 2025
          </p>
        </div>
        <div className="rounded-none md:rounded-2xl flex items-start">
          <img
            src={Property}
            alt="listing"
            className="w-[50%] rounded-none md:rounded-l-2xl"
          />
          <div className="grid grid-cols-2 gap-3 ml-3">
            <img src={Property} alt="listing" className="" />
            <img src={Property} alt="listing" className="rounded-tr-2xl" />
            <img src={Property} alt="listing" className="" />
            <img src={Property} alt="listing" className="rounded-br-2xl" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="pt-8 mb-4">
            <h1 className="text-gray-700 text-xl font-medium">
              Entire serviced apartment in Colombo, Sri Lanka
            </h1>
            <ul className="flex grid-cols-3 py-1 gap-1 text-gray-600">
              <li className="flex items-center gap-1">
                2 guest <LuDot />
              </li>
              <li className="flex items-center gap-1">
                2 bedroom <LuDot />
              </li>
              <li className="flex items-center gap-1">2 bath</li>
            </ul>
          </div>
          <button>
            <a href="" className="text-gray-700 hover:bg-gray-100 py-2 px-4 hover:text-gray-900 rounded-lg underline font-medium flex items-center gap-2"><LuShare  size={20}/> Share</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
