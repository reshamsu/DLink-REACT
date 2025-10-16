import React from "react";

const NotFound = () => {
  return (
    <div className=" bg-gray-100">
      <div className="max-w-[1200px] mx-auto mt-22 md:mt-0 h-[55vh] md:h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-[#f09712]">404</h1>
        <h2 className="text-2xl p-2 font-semibold">Page Not Found.</h2>
        <p className="font-normal text-gray-600 px-8 text-center">
          The page that your looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
