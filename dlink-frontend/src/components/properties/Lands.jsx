import React from "react";

const Lands = () => {
  return (
    <div className="max-w-[1260px] mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Lands</h1>
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

export default Lands;
