import React from "react";
import Banner from "../../assets/banner.jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="relative max-w-[1240px] mx-auto md:h-[70vh] h-[50vh] rounded-b-none md:rounded-3xl overflow-hidden">
        {/* Background Image */}
        <img src={Banner} alt="Hero" className="w-full h-full object-cover" />

        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8 space-y-10">
          <div className="flex justify-center items-center">
            <h1 className=" md:text-5xl text-4xl font-bold text-center">Find </h1>
            <ReactTyped
              className="md:text-5xl text-4xl font-bold text-center pl-2"
              strings={["Houses", "Apartments", "Villas", "Lands"]}
              typeSpeed={140}
              backSpeed={120}
              loop
            />
          </div>

          <input
            type="text"
            placeholder="Search by location or property type"
            className="border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-6 py-4 rounded-full w-full max-w-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#df8600]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
