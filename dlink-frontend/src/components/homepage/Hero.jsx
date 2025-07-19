import React from "react";
import Banner from "../../assets/banner.jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 pt-[88px]">
      <img
        src={Banner}
        alt="Hero"
        className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
      />

      <div className="absolute inset-0 bg-black/50 h-[50vh] md:h-[60vh] lg:h-[70vh] mt-[88px]"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 space-y-8 z-10 pt-[88px]">
        <div className="flex flex-wrap justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Find&nbsp;</h1>
          <ReactTyped
            className="text-4xl md:text-5xl font-bold text-[#df8600]"
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
  );
};

export default Hero;
