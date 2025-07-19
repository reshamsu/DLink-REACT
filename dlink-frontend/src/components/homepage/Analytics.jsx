import React from "react";
import { motion } from "framer-motion";

import homeIcon from "../../assets/homes.png";
import apartmentIcon from "../../assets/apartments.png";
import landIcon from "../../assets/lands.png";

const cardData = [
  {
    icon: homeIcon,
    title: "Homes",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque molestiae amet obcaecati quibusdam ad unde, consectetur numquam.",
  },
  {
    icon: apartmentIcon,
    title: "Apartments",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque molestiae amet obcaecati quibusdam ad unde, consectetur numquam.",
  },
  {
    icon: landIcon,
    title: "Lands",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque molestiae amet obcaecati quibusdam ad unde, consectetur numquam.",
  },
];

// For the full container
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// For the individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.6, // starts after the container animation
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Analytics = () => {
  return (
    <motion.div
      className="text-white pt-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariant}
    >
      <div className="max-w-[1240px] mx-auto bg-gray-950 rounded-3xl p-8 md:p-10">
        <div className="mb-8 px-2 text-center">
          <p className="text-[#f09712] text-lg font-bold mb-2">SERVICE</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">What we do</h1>
          <p className="text-md md:text-lg font-semibold text-gray-400">
            Full-Service Agents, Modern Technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              className="bg-gray-900/20 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl hover:shadow-2xl"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center bg-[#f09712] rounded-full shadow-inner hover:scale-100 transition-transform">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-20 h-20 rounded-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
              <p className="text-gray-500 text-sm">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;
