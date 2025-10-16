import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuCalendarFold } from "react-icons/lu";
import { PiElevatorDuotone } from "react-icons/pi";
import { MdPool } from "react-icons/md";
import { TbParkingCircle } from "react-icons/tb";
import { FaRegSnowflake } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { BiSolidCctv } from "react-icons/bi";
import { FaDumbbell } from "react-icons/fa";
import { PiPottedPlantBold } from "react-icons/pi";
import { LuDot } from "react-icons/lu";

const Info = () => {
  // Consistent responsive icon styling
  const iconClass = "text-3xl md:text-3xl flex-shrink-0 text-gray-700";

  return (
    <div className="max-w-[1200px] mx-auto m-4 xl:px-0 md:px-6">
      <div>
        <div className="flex items-center justify-between">
          <div className="pt-4 mb-8 hidden md:block">
            <h1 className="text-gray-700 text-xl font-medium">
              Entire Serviced Apartment in Colombo, Sri Lanka
            </h1>
            <ul className="flex grid-cols-3 py-1 gap-1 text-gray-600">
              <li className="flex items-center gap-1">
                2 Guests <LuDot />
              </li>
              <li className="flex items-center gap-1">
                2 Bedrooms <LuDot />
              </li>
              <li className="flex items-center gap-1">2 Bathrooms</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-none md:grid-cols-[1.4fr_0.8fr] gap-6 mx-6 md:mx-0">
          {/* Left Column - Property Info */}
          <div className="flex flex-col h-fit">
            <div className="pb-4 border-b border-gray-200">
              <h1 className="text-lg font-medium">Property Owner</h1>
              <p className="text-gray-400 text-sm mt-1">D-Link Colombo</p>
            </div>

            <div className="py-2 border-b border-gray-200 text-gray-800">
              {[
                {
                  icon: <TbSmartHome className={iconClass} />,
                  title: "Ready for Your Next Move",
                  desc: "From cozy retreats to spacious commercial hubs — every property is move-in ready for rent or sale.",
                },
                {
                  icon: <FaMapLocationDot className={iconClass} />,
                  title: "Prime Locations",
                  desc: "Strategically located in vibrant, high-demand neighborhoods with strong growth potential.",
                },
                {
                  icon: <LuCalendarFold className={iconClass} />,
                  title: "Secure & Flexible Deals",
                  desc: "Transparent agreements, adaptable terms, and safe transactions — every step of the way.",
                },
              ].map((item, idx) => (
                <div key={idx} className="py-4 flex items-center gap-6">
                  {item.icon}
                  <div>
                    <h2 className="text-md mb-1 font-medium">{item.title}</h2>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Price & CTA */}
          <div className="shadow-xl rounded-2xl p-8 border ml-0 md:ml-4 h-fit border-gray-100">
            <div className="flex gap-2">
              <h1 className="text-2xl font-medium">$149</h1>
              <p className="text-gray-700 mt-1">per perch</p>
            </div>
            <p className="my-4 text-gray-500">
              Discover an exceptional opportunity to own or invest in one of
              Colombo’s most sought-after properties.
            </p>
            <button>
              <a
                href="tel:+94761676603"
                className="px-6 py-2.5 rounded-lg flex items-center text-center font-semibold text-white bg-[#f09712] hover:bg-[#ec6d06e8]"
              >
                Reserve for Viewings
              </a>
            </button>
            <p className="text-xs mt-3 text-gray-400">
              *No payment required — inquiries only.
            </p>
          </div>

          {/* Bottom Section - Description & Features */}
          <div className="mt-6 md:mt-0">
            <h1 className="text-xl font-semibold">Description</h1>
            <div className="py-4 pb-8 border-b border-gray-200">
              <p className="text-gray-600 text-sm">
                Experience modern living at its finest with this premium
                serviced apartment — thoughtfully designed for comfort,
                convenience, and style in the heart of Colombo.
              </p>
            </div>

            <div className="pt-8 border-b border-gray-200">
              <h1 className="text-xl font-medium">What This Place Offers</h1>
              <div className="grid grid-cols-none md:grid-cols-2 gap-x-6 my-4 text-gray-700">
                {[
                  {
                    icon: <PiElevatorDuotone className={iconClass} />,
                    title: "24/7 Lift Access",
                    desc: "High-speed elevators available anytime for maximum convenience.",
                  },
                  {
                    icon: <MdPool className={iconClass} />,
                    title: "Swimming Pool",
                    desc: "Refresh and unwind in a well-maintained pool, perfect for leisure and fitness.",
                  },
                  {
                    icon: <TbParkingCircle className={iconClass} />,
                    title: "Secure Parking",
                    desc: "Dedicated, monitored parking ensuring safety for your vehicles.",
                  },
                  {
                    icon: <FaRegSnowflake className={iconClass} />,
                    title: "Air Conditioning",
                    desc: "Enjoy year-round comfort with efficient climate control.",
                  },
                  {
                    icon: <FaWifi className={iconClass} />,
                    title: "High-Speed Internet",
                    desc: "Reliable, fast connectivity for both work and entertainment.",
                  },
                  {
                    icon: <BiSolidCctv className={iconClass} />,
                    title: "Security System",
                    desc: "CCTV coverage and secure access points for complete peace of mind.",
                  },
                  {
                    icon: <FaDumbbell className={iconClass} />,
                    title: "Gym & Fitness Center",
                    desc: "State-of-the-art fitness facilities to keep you active and healthy.",
                  },
                  {
                    icon: <PiPottedPlantBold className={iconClass} />,
                    title: "Garden & Green Spaces",
                    desc: "Beautifully landscaped areas for relaxation and outdoor enjoyment.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="py-4 flex items-center gap-6">
                    {item.icon}
                    <div>
                      <h2 className="text-md mb-1 font-medium">{item.title}</h2>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-8">
              <h1 className="text-xl font-medium">Locate This Property</h1>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.28096487474!2d79.82563498750112!3d6.927079721596047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597fce3e72e1%3A0x26a28452c18a2bb6!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1689301736332!5m2!1sen!2sus"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
