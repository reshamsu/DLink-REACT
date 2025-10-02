import React, { useEffect, useState } from "react";
import Property from "../../../assets/property.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import supabase from "../../../config/supabaseClient";
import { FaBed, FaBath } from "react-icons/fa6";

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
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
      const formattedData = data.map((listing) => {
        let image = Property;
        if (listing.image_url) image = listing.image_url;

        return {
          id: listing.id,
          title: listing.property_title,
          location: listing.city + " - " + listing.location,
          is_furnished: listing.is_furnished,
          bedrooms: listing.bedrooms,
          bathrooms: listing.bathrooms,
          type: listing.property_type,
          status: listing.status,
          image,
        };
      });

      // filter only apartments
      const apartments = formattedData.filter(
        (listing) =>
          listing.type && listing.type.toLowerCase() === "apartment"
      );

      setListingsData(apartments);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1240px] min-h-screen mx-auto px-8 py-10 md:py-14 text-gray-600 mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between text-center md:text-start items-center mb-8">
        <div>
          <p className="text-[#f09712] text-lg font-bold mb-1">APARTMENTS</p>
          <h1 className="text-2xl font-semibold mb-4 md:mb-0">
            Featured Apartments
          </h1>
        </div>

        <input
          type="text"
          placeholder="Find Listing"
          className="border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f09712] px-6 py-2.5 w-full md:w-64 rounded-full mt-4 md:mt-0"
        />
      </div>

      {/* Loader + Empty */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-[#f09712] border-t-transparent rounded-full animate-spin"></div>
          <p className="ml-3 text-gray-500">Loading listings...</p>
        </div>
      ) : listingsData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No Apartments Found
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          initial="hidden"
          animate="visible"
        >
          {listingsData.map((listing, index) => (
            <motion.div
              key={listing.id}
              custom={index}
              variants={rowVariants}
              className="bg-white rounded-3xl overflow-hidden group hover:scale-105 duration-300 transition-transform flex flex-col h-full"
            >
              {/* Image */}
              <div className="w-full overflow-hidden relative rounded-3xl">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-60 xl:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 py-4 px-2">
                <Link
                  to={`/property/listing/${listing.id}`}
                  onClick={scrollToTop}
                  className="text-sm lg:text-base font-semibold hover:text-[#f09712] hover:underline"
                >
                  {listing.title}
                </Link>
                <p className="text-xs lg:text-sm text-gray-500 my-1">{listing.location}</p>

                <div className="my-2 flex items-center gap-2 text-xs font-bold flex-wrap">
                  <p className="flex items-center gap-1">
                    <FaBed size={16} className="text-indigo-400" />
                    {listing.bedrooms} Bed
                  </p>
                  <span className="text-gray-300">|</span>
                  <p className="flex items-center gap-1">
                    <FaBath size={14} className="text-orange-400" />
                    {listing.bathrooms} Bath
                  </p>
                  <span className="text-gray-300">|</span>
                  <p className="text-teal-500">{listing.is_furnished}</p>
                </div>

                <div className="flex justify-between items-center my-3">
                  <span className="inline-block bg-green-300 text-black text-[11px] font-semibold px-3 py-1.5 rounded-lg">
                    {listing.status}
                  </span>
                  <p className="text-sm text-[#f09712] font-semibold">
                    {listing.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Listings;
