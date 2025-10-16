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
    <div className="relative pt-[88px] h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-orange-500/20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${Banner})`,
        }}
      ></div>

      <div
        className={`relative z-10 flex flex-col justify-center items-center text-gray-100 h-full px-8 space-y-10 transition-all duration-2000 ease-out ${
          animate ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap justify-center items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Find&nbsp;
            </h1>
            <ReactTyped
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f09712]"
              strings={["Homes", "Apartments", "Villas", "Lands"]}
              typeSpeed={120}
              backSpeed={80}
              loop
            />
          </div>
          <p className="text-xs md:text-base text-center text-gray-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            nesciunt, fugit nihil enim mollitia, asperiores eum inventore illo
            esse molestias ea porro ipsa perferendis blanditiis fuga reiciendis
            officiis aperiam non!
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="py-4 px-10 bg-orange-400 text-white font-semibold rounded-full h-fit duration-500 transition-transform hover:scale-105 cursor-pointer"
          >
            Find Property
          </button>
          <button
            type="submit"
            className="py-4 px-10 bg-black/60 hover:bg-white/80 text-black font-semibold rounded-full h-fit duration-500 transition-transform hover:scale-105 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
