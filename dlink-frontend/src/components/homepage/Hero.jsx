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
    <div className="relative w-full pt-[88px] h-[calc(100vh-88px)] overflow-hidden">
      {/* Background with Dark Overlay as One */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${Banner})`,
        }}
      ></div>

      {/* Foreground Content */}
      <div
        className={`relative z-10 flex flex-col justify-center items-center text-gray-300 h-full px-6 space-y-6 transition-all duration-2000 ease-out ${
          animate ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="flex flex-wrap justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Find&nbsp;</h1>
          <ReactTyped
            className="text-4xl md:text-5xl font-bold text-[#f09712]"
            strings={["Houses", "Apartments", "Villas", "Lands"]}
            typeSpeed={120}
            backSpeed={80}
            loop
          />
        </div>
        <p className="text-xl font-semibold text-gray-300">Find the Perfect Place for your Needs.</p>
        <input
          type="text"
          placeholder="Search by location or property type"
          className="border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-6 py-4 rounded-full w-full max-w-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#df8600] transition duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;
