import React, { useEffect, useState } from "react";
import Property from "../../../assets/property.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import supabase from "../../../config/supabaseClient";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";

const chunkIntoRows = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Listings = () => {
  const [listingsData, setListingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchListings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching listings:", error);
      setListingsData([]);
    } else {
      // Format the data
      const formattedData = data.map((listing) => ({
        id: listing.id,
        title: listing.property_title,
        location: listing.city + " - " + listing.location,
        is_furnished: listing.is_furnished,
        bedrooms: listing.bedrooms,
        bathrooms: listing.bathrooms,
        type: listing.property_type,
        status: listing.status,
        image: listing.image_url || Property, // fallback image
      }));

      // FILTER only apartments
      const apartments = formattedData.filter(
        (listing) => listing.type.toLowerCase() === "apartment"
      );

      setListingsData(apartments);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const rows = chunkIntoRows(listingsData, 8);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1240px] min-h-screen mx-auto mt-20 xl:px-0 p-6 md:px-6 py-14 text-gray-600">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between text-center md:text-start items-center">
        <div>
          <p className="text-[#f09712] text-lg font-bold mb-1">APARTMENT</p>
          <h1 className="text-2xl font-semibold mb-6 md:mb-0">
            Featured Apartments
          </h1>
        </div>

        <input
          type="text"
          placeholder="Find Listing"
          className="border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f09712] px-6 py-2.5 md:w-3xs w-full rounded-full"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-[#f09712] border-t-transparent rounded-full animate-spin"></div>
          <p className="ml-3 text-gray-500">Loading listings...</p>
        </div>
      ) : listingsData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No Commercial Properties Found
        </p>
      ) : (
        rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            custom={rows.length - rowIndex - 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={rowVariants}
            className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6"
          >
            {row.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-3xl overflow-hidden group hover:scale-105 duration-300 transition-transform flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full h-60 relative rounded-3xl overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-600 rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 py-4 px-2">
                  <Link
                    to={`/property/listing/${listing.id}`}
                    onClick={scrollToTop}
                    className="text-md font-semibold hover:text-[#f09712] hover:underline"
                  >
                    {listing.title}
                  </Link>
                  <p className="text-sm text-gray-500 mb-2">
                    {listing.location}
                  </p>

                  <div className="mt-auto">
                    <i className="text-xs font-semibold text-gray-600">
                      {listing.is_furnished}
                    </i>
                    <div className="flex items-center gap-2">
                      <p className="flex items-center gap-2 text-xs font-bold pt-1 mb-3">
                        <FaBed size={16} /> {listing.bedrooms} Bed
                      </p>
                      <span>|</span>
                      <p className="flex items-center gap-2 text-xs font-bold pt-1 mb-3">
                        <FaBath size={14} /> {listing.bathrooms} Bath
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <span className="inline-block bg-[palegreen] text-[11px] font-semibold px-3 py-1.5 rounded-lg">
                      {listing.status}
                    </span>
                    <p className="text-sm text-[#f09712] font-semibold">
                      {listing.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ))
      )}
    </div>
  );
};

export default Listings;
