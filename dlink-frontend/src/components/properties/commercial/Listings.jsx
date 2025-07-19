import React from "react";
import Property from "../../../assets/property.jpeg";

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

const Listings = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 pt-33 md:px-0 py-12 text-gray-800">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold mb-4 md:mb-0">
          Explore Commercial Properties
        </h1>
        <input
          type="text"
          placeholder="Find Commercial"
          className="border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#df8600] px-6 py-2.5 md:w-3xs w-full rounded-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {listingsData.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden group transition duration-300 hover:shadow-xl"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <a href="/" className="text-md font-semibold">
                {listing.title}
              </a>
              <p className="text-sm text-gray-500 mb-4">{listing.location}</p>
              <p className="text-sm text-gray-500 mb-2">{listing.type}</p>
              <span className="inline-block bg-[bisque] text-xs font-medium px-3 py-2 rounded-lg">
                {listing.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
