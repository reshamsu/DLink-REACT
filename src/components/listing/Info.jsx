import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";
import {
  TbSmartHome,
  TbParkingCircle
} from "react-icons/tb";
import { FaMapLocationDot, FaRegSnowflake, FaWifi, FaDumbbell } from "react-icons/fa6";
import { LuCalendarFold, LuDot } from "react-icons/lu";
import { PiElevatorDuotone, PiPottedPlantBold } from "react-icons/pi";
import { MdPool } from "react-icons/md";
import { BiSolidCctv } from "react-icons/bi";

const Info = () => {
  const { id } = useParams(); // grabs listing id from URL
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchListing = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching listing:", error);
      setListing(null);
    } else {
      setListing(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchListing();
  }, [id]);

  const iconClass = "text-3xl md:text-3xl flex-shrink-0 text-gray-700";

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-[#f09712] border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-3 text-gray-500">Loading property...</p>
      </div>
    );
  }

  if (!listing) {
    return <p className="text-center text-gray-500 py-20">Property not found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto m-4 xl:px-0 md:px-6">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="pt-4 mb-8 hidden md:block">
            <h1 className="text-gray-700 text-xl font-medium">
              {listing.property_title} in {listing.city}, {listing.location}
            </h1>
            <ul className="flex grid-cols-3 py-1 gap-1 text-gray-600">
              <li className="flex items-center gap-1">
                {listing.guests || "N/A"} Guests <LuDot />
              </li>
              <li className="flex items-center gap-1">
                {listing.bedrooms} Bedrooms <LuDot />
              </li>
              <li className="flex items-center gap-1">
                {listing.bathrooms} Bathrooms
              </li>
            </ul>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-none md:grid-cols-[1.4fr_0.8fr] gap-6 mx-6 md:mx-0">
          {/* Left Column */}
          <div className="flex flex-col h-fit">
            <div className="pb-4 border-b border-gray-200">
              <h1 className="text-lg font-medium">Property Owner</h1>
              <p className="text-gray-400 text-sm mt-1">
                {listing.owner_name || "Not disclosed"}
              </p>
            </div>

            <div className="py-2 border-b border-gray-200 text-gray-800">
              {[
                {
                  icon: <TbSmartHome className={iconClass} />,
                  title: "Property Type",
                  desc: listing.property_type,
                },
                {
                  icon: <FaMapLocationDot className={iconClass} />,
                  title: "Location",
                  desc: `${listing.city}, ${listing.location}`,
                },
                {
                  icon: <LuCalendarFold className={iconClass} />,
                  title: "Status",
                  desc: listing.status,
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

          {/* Right Column */}
          <div className="shadow-xl rounded-2xl p-8 border ml-0 md:ml-4 h-fit border-gray-100">
            <div className="flex gap-2">
              <h1 className="text-2xl font-medium">
                ${listing.price || "Contact for Price"}
              </h1>
              <p className="text-gray-700 mt-1">per perch</p>
            </div>
            <p className="my-4 text-gray-500">{listing.description}</p>
            <button>
              <a
                href={`tel:${listing.contact_number || "+94XXXXXXXXX"}`}
                className="px-6 py-2.5 rounded-lg flex items-center text-center font-semibold text-white bg-[#f09712] hover:bg-[#ec6d06e8]"
              >
                Reserve for Viewings
              </a>
            </button>
            <p className="text-xs mt-3 text-gray-400">
              *No payment required — inquiries only.
            </p>
          </div>

          {/* Features */}
          <div className="mt-6 md:mt-0">
            <h1 className="text-xl font-semibold">What This Place Offers</h1>
            <div className="grid grid-cols-none md:grid-cols-2 gap-x-6 my-4 text-gray-700">
              {[
                {
                  icon: <PiElevatorDuotone className={iconClass} />,
                  title: "Lift Access",
                  desc: "24/7 elevator access",
                },
                {
                  icon: <MdPool className={iconClass} />,
                  title: "Swimming Pool",
                  desc: "Private pool available",
                },
                {
                  icon: <TbParkingCircle className={iconClass} />,
                  title: "Parking",
                  desc: "Secure parking available",
                },
                {
                  icon: <FaRegSnowflake className={iconClass} />,
                  title: "Air Conditioning",
                  desc: listing.is_furnished ? "Fully furnished & A/C" : "Unfurnished",
                },
                {
                  icon: <FaWifi className={iconClass} />,
                  title: "WiFi",
                  desc: "High-speed internet",
                },
                {
                  icon: <BiSolidCctv className={iconClass} />,
                  title: "Security",
                  desc: "CCTV & gated access",
                },
                {
                  icon: <FaDumbbell className={iconClass} />,
                  title: "Gym",
                  desc: "Fitness facilities available",
                },
                {
                  icon: <PiPottedPlantBold className={iconClass} />,
                  title: "Garden",
                  desc: "Green landscaped areas",
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
        </div>
      </div>
    </div>
  );
};

export default Info;
