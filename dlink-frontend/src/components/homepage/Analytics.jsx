import React from "react";

const cardData = [
  {
    title: "Homes",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque molestiae amet obcaecati quibusdam ad unde, consectetur numquam.",
  },
  {
    title: "Apartments",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque molestiae amet obcaecati quibusdam ad unde, consectetur numquam.",
  },
  {
    title: "Lands",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque molestiae amet obcaecati quibusdam ad unde, consectetur numquam.",
  },
];

const Analytics = () => {
  return (
    <div className="text-gray-700 pt-12 px-6">
      <div className="max-w-[1240px] mx-auto bg-gray-100 rounded-xl p-6 md:p-8">
        <div className="mb-8 px-2">
          <p className="text-[#df8600] font-semibold mb-2">SERVICE</p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">What we do</h1>
          <p className="text-sm md:text-md font-semibold text-gray-500">
            Full-Service Agents, Modern Technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-md md:text-lg font-semibold mb-3">
                {card.title}
              </h2>
              <p className="text-gray-400 text-sm">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
