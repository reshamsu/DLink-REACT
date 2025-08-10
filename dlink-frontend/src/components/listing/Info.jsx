import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { VscVerifiedFilled } from "react-icons/vsc";
import { LuCalendarFold } from "react-icons/lu";
import { PiElevatorDuotone } from "react-icons/pi";
import { MdPool } from "react-icons/md";
import { TbParkingCircle } from "react-icons/tb";
import { FaRegSnowflake } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { BiSolidCctv } from "react-icons/bi";
import { FaDumbbell } from "react-icons/fa";
import { PiPottedPlantBold } from "react-icons/pi";

const Info = () => {
  return (
    <div className="max-w-[1200px] mx-auto m-4">
      <div>
        <div className="grid grid-cols-[1.4fr_0.8fr] gap-6">
          <div className="flex flex-col h-fit">
            <div className="pb-4 border-b border-gray-200">
              <h1 className="text-lg font-medium">Property Owner</h1>
              <p className="text-gray-400 text-sm mt-1">D-Link Colombo</p>
            </div>
            <div className="py-2 border-b border-gray-200 text-gray-800">
              <div className="py-4 flex items-center gap-6">
                <TbSmartHome size={33} />
                <div>
                  <h2 className="text-md mb-1 font-medium">
                    Ready for your Next Move
                  </h2>
                  <p className="text-gray-500 text-sm">
                    From cozy apartments to spacious commercial spaces — fully
                    prepared for rent or sale.
                  </p>
                </div>
              </div>
              <div className="py-4 flex items-center gap-6">
                <FaMapLocationDot size={28} />
                <div>
                  <h2 className="text-md mb-1 font-medium">Prime Locations</h2>
                  <p className="text-gray-500 text-sm">
                    Carefully selected properties in high-demand neighborhoods
                    and growth areas.
                  </p>
                </div>
              </div>
              <div className="py-4 flex items-center gap-6">
                <LuCalendarFold size={28} />
                <div>
                  <h2 className="text-md mb-1 font-medium">
                    Secure & Flexible Deals
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Transparent contracts, flexible terms, and safe transactions
                    every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-2xl p-8 border ml-4 h-fit border-gray-100">
            <div className="flex gap-2">
              <h1 className="text-2xl font-medium">$149</h1>
              <p className="text-gray-700 mt-1">per perch</p>
            </div>
            <div>
              <p className="my-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                deserunt necessitatibus.
              </p>
            </div>
            <button>
              <a
                href="tel:+94761676603"
                className="px-6 py-2.5 rounded-lg flex items-center text-center font-semibold text-white bg-[#f09712] hover:bg-[#ec6d06e8]"
              >
                Reserve for Viewings
              </a>
            </button>

            <p className="text-xs mt-3 text-gray-400">
              *You won't be charged. This is just for inquires
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Description</h1>

            <div className="py-4 pb-8 border-b border-gray-200">
              <p className="text-gray-600 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab et
                quia deserunt aliquam debitis dolore, ipsa sit optio, nulla,
                suscipit ad temporibus voluptates sint aperiam consequuntur.
                Facilis sed corrupti et?
              </p>
            </div>
            <div className="pt-8 border-b border-gray-200">
              <h1 className="text-xl font-medium">What this place offers</h1>
              <div className="grid grid-cols-2 gap-x-6 my-4 text-gray-700">
                <div className="py-4 flex items-center gap-4">
                  <PiElevatorDuotone size={36} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">
                      24/7 Lift Access
                    </h2>
                    <p className="text-gray-500 text-sm">
                      High-speed elevators with round-the-clock access for
                      convenience.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-center gap-4">
                  <MdPool size={33} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">Swimming Pool</h2>
                    <p className="text-gray-500 text-sm">
                      Relax and refresh in the private or shared swimming pool.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-center gap-4">
                  <TbParkingCircle size={36} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">Secure Parking</h2>
                    <p className="text-gray-500 text-sm">
                      Dedicated parking with security surveillance for your
                      vehicles.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-center gap-4">
                  <FaRegSnowflake size={28} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">
                      Air Conditioning
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Fully air-conditioned spaces for year-round comfort.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-center gap-4">
                  <FaWifi size={30} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">
                      High-Speed Internet
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Reliable broadband connection for work and entertainment.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-center gap-4">
                  <BiSolidCctv size={33} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">
                      Security System
                    </h2>
                    <p className="text-gray-500 text-sm">
                      CCTV monitoring and secure access controls for peace of
                      mind.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-center gap-4">
                  <FaDumbbell size={28} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">
                      Gym & Fitness Center
                    </h2>
                    <p className="text-gray-500 text-sm">
                      On-site gym facilities to stay active and healthy.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-center gap-4">
                  <PiPottedPlantBold size={30} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">
                      Garden & Green Spaces
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Landscaped gardens for relaxation and outdoor activities.
                    </p>
                  </div>
                </div>

                {/* <div className="py-4 flex items-center gap-4">
                  <VscVerifiedFilled size={30} />
                  <div>
                    <h2 className="text-md mb-1 font-medium">
                      Conference/Meeting Rooms
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Professional spaces for business meetings and events.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="py-8">
              <h1 className="text-xl font-medium">Locate this Property</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
