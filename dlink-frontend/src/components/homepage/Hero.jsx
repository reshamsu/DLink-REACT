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
    <div className="relative w-full pt-[88px] h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-black/15 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${Banner})`,
        }}
      ></div>

      <div
        className={`relative z-10 flex flex-col justify-center items-center text-gray-100 h-full px-8 space-y-10 transition-all duration-2000 ease-out ${
          animate ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-center items-center text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Find&nbsp;
            </h1>
            <ReactTyped
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#f09712]"
              strings={["Homes", "Apartments", "Villas", "Lands"]}
              typeSpeed={120}
              backSpeed={80}
              loop
            />
          </div>
          <p className="text-xs md:text-lg font-semibold text-gray-50">
            Locating the perfect place for your Needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-7.5 rounded-3xl bg-white/90 text-gray-900 duration-800">
          <form
            action="post"
            className="flex flex-col lg:flex-row items-end gap-3 text-sm"
          >
            <div className="flex flex-col gap-2">
              <label className="font-medium">Search Property</label>
              <input
                type="text"
                placeholder="Property Title or Name"
                className="bg-white/40 hover:bg-white duration-500 transition-all border-2 border-white/70 px-4 py-3 rounded-xl hover:scale-105"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Property Type</label>
              <select
                name="type"
                className="bg-white/40 hover:bg-white duration-500 transition-all border-2 border-white/70 px-4 py-3 rounded-xl hover:scale-105 w-full 2xl:w-40"
                required
              >
                <option disabled selected>
                  Type
                </option>
                <option value="1">Apartment</option>
                <option value="2">House</option>
                <option value="3">Lands</option>
                <option value="4">Commercial Property</option>
                <option value="5">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Search City</label>
              <select
                name="city"
                className="bg-white/40 hover:bg-white duration-500 transition-all border-2 border-white/70 px-4 py-3 rounded-xl hover:scale-105 w-full lg:w-40"
                required
              >
                <option disabled selected>
                  City
                </option>
                <option value="1">Colombo</option>
                <option value="2">Kandy</option>
                <option value="3">Galle</option>
                <option value="5">Elsewhere</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Property Status</label>
              <select
                name="status"
                className="bg-white/40 hover:bg-white duration-500 transition-all border-2 border-white/70 px-4 py-3 rounded-xl hover:scale-105 w-full lg:w-40"
                required
              >
                <option disabled selected>
                  Status
                </option>
                <option value="1">Rental</option>
                <option value="2">Sale</option>
                <option value="3">Lease</option>
              </select>
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                name="Search Listing"
                className="py-4 px-10 bg-orange-400 text-white font-semibold rounded-full h-fit duration-500 transition-transform hover:scale-105 cursor-pointer"
              >
                Search Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
