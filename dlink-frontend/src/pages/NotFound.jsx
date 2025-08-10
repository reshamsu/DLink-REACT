import React from "react";

const NotFound = () => {
  return (
    <div className=" bg-gray-100">
      <div className="max-w-[1200px] mx-auto py-22 h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-[#f09712]">404</h1>
        <h2 className="text-2xl py-4 font-semibold">Page Not Found.</h2>
        <p className="font-medium text-gray-600">
          The page that your looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
