import React from "react";
import Property from "../../assets/property.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const listingsData = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Colombo 2",
    type: "Apartment",
    status: "Ready to Move-In",
    image: Property,
  },
  {
    id: 2,
    title: "Luxury Condo",
    location: "Colombo 5",
    type: "House",
    status: "Available Soon",
    image: Property,
  },
  {
    id: 3,
    title: "City View Flat",
    location: "Colombo 7",
    type: "Apartment",
    status: "Ready to Move-In",
    image: Property,
  },
  {
    id: 4,
    title: "Modern Apartment",
    location: "Colombo 2",
    type: "House",
    status: "Ready to Move-In",
    image: Property,
  },
  {
    id: 5,
    title: "Luxury Condo",
    location: "Colombo 5",
    type: "Apartment",
    status: "Available Soon",
    image: Property,
  },
  {
    id: 6,
    title: "City View Flat",
    location: "Colombo 7",
    type: "House",
    status: "Ready to Move-In",
    image: Property,
  },
  {
    id: 7,
    title: "Modern Apartment",
    location: "Colombo 2",
    type: "Apartment",
    status: "Ready to Move-In",
    image: Property,
  },
  {
    id: 8,
    title: "Luxury Condo",
    location: "Colombo 5",
    type: "House",
    status: "Available Soon",
    image: Property,
  },
  {
    id: 9,
    title: "City View Flat",
    location: "Colombo 7",
    type: "Apartment",
    status: "Ready to Move-In",
    image: Property,
  },
  {
    id: 10,
    title: "City View Flat",
    location: "Colombo 7",
    type: "Apartment",
    status: "Ready to Move-In",
    image: Property,
  },
];

// Split listings into rows (5 cards per row for xl:grid-cols-5)
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
  const rows = chunkIntoRows(listingsData, 5);

  // 🆕 Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1200px] mx-auto xl:px-0 p-6 md:px-6 py-14 text-gray-800">
      <div className="mb-8 flex flex-col md:flex-row justify-between text-center md:text-start items-center">
        <div>
          <p className="text-[#f09712] text-lg font-bold mb-1">LISTINGS</p>
          <h1 className="text-2xl font-semibold mb-6 md:mb-0">
            Featured Listings
          </h1>
        </div>

        <input
          type="text"
          placeholder="Find Listing"
          className="border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f09712] px-6 py-2.5 md:w-3xs w-full rounded-full"
        />
      </div>

      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          custom={rows.length - rowIndex - 1} // reverse order for bottom-to-top
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={rowVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-6"
        >
          {row.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden group transition duration-300 hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-600"></div>
              </div>
              <div className="p-4">
                {/* 🆕 Added onClick to scroll to top */}
                <Link
                  to="/property/listing"
                  onClick={scrollToTop}
                  className="text-md font-semibold"
                >
                  {listing.title}
                </Link>
                <p className="text-sm text-gray-500 mb-4">{listing.location}</p>
                <p className="text-sm text-gray-500 mb-2">{listing.type}</p>
                <span className="inline-block bg-[bisque] text-[11px] font-medium px-3 py-1.5 rounded-lg">
                  {listing.status}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Listings;
