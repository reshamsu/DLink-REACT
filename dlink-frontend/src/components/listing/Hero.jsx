import React from "react";
import Property from "../../assets/property.jpg";


const Hero = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-22 flex md:flex flex-col-reverse md:flex-col">
        <div className="pt-4 md:pt-10 mb-6 mx-5 md:mx-0">
          <h1 className="text-xl md:text-2xl font-medium">
            Modern Apartment in Dehiwela, Colombo
          </h1>
          <p className="py-1 text-sm font-normal text-gray-400">
            Updated: 9th Aug 2025
          </p>
        </div>
        <div className="rounded-none md:rounded-2xl flex items-start flex-col md:flex-row">
          <img
            src={Property}
            alt="listing"
            className="w-full md:w-[49.2%] rounded-none md:rounded-l-2xl"
          />
          <div className="hidden md:grid grid-cols-2 gap-3 md:mx-3 my-3 md:my-0">
            <img src={Property} alt="listing" className="" />
            <img src={Property} alt="listing" className="rounded-none md:rounded-tr-2xl" />
            <img src={Property} alt="listing" className="" />
            <img src={Property} alt="listing" className="rounded-none md:rounded-br-2xl" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
