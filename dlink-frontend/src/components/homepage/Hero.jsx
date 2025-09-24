import React, { useEffect, useState } from "react";
import Banner from "../../assets/banner.jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="relative w-full pt-[88px] h-[64vh] md:h-[100vh] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${Banner})`,
        }}
      ></div>

      <div
        className={`relative z-10 flex flex-col justify-center items-center text-gray-100 h-full px-8 space-y-4 transition-all duration-2000 ease-out ${
          animate ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="flex flex-wrap justify-center items-center text-center">
          <h1 className="text-2xl  md:text-3xl lg:text-5xl font-bold">Find&nbsp;</h1>
          <ReactTyped
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#f09712]"
            strings={["Homes", "Apartments", "Villas", "Lands"]}
            typeSpeed={120}
            backSpeed={80}
            loop
          />
        </div>
        <p className="text-sm md:text-lg font-semibold text-gray-100">Locating the perfect place for your Needs.</p>
        <input
          type="text"
          placeholder="Search by location or property type"
          className="border-3 font-normal border-[#df8600] bg-white text-gray-600 placeholder-gray-400 px-6 py-3 md:py-4 rounded-full w-full max-w-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#df8600] transition duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;
