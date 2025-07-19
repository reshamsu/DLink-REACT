import React from "react";
import { FaSearchLocation, FaCity, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import Banner2 from "../../assets/banner2.jpg";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-950 text-gray-50">
      <div className="max-w-[1240px] mx-auto px-8 md:px-8 lg:px-6 py-14">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-14 md:gap-4 py-8">
          {/* Image with dark overlay */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative w-full h-[80vh] hidden md:block"
          >
            <img
              src={Banner2}
              alt="Why Choose Us"
              className="object-cover w-full h-full rounded-t-[400px] rounded-b-[20px] shadow-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-t-[400px] rounded-b-[20px]"></div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center text-gray-300 font-medium px-4 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-14 text-center"
            >
              <p className="text-[#f09712] text-lg font-bold mb-3">
                OUR EXPERTISE
              </p>
              <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold mb-4">
                Why Choose Us?
              </h1>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                With a deep understanding of the local market and a passion for
                connecting people with the right properties, we provide a
                seamless, trustworthy, and high-value real estate experience.
              </p>
            </motion.div>

            {/* Highlights */}
            <div className="flex flex-col gap-10 w-full">
              {[
                {
                  icon: (
                    <FaSearchLocation className="text-[#f09712] text-6xl md:text-7xl" />
                  ),
                  title: "Personalized Property Search",
                  text: "We tailor each property search to match your unique needs, preferences, and budget—no guesswork, just results.",
                },
                {
                  icon: (
                    <FaCity className="text-[#f09712] text-6xl md:text-7xl" />
                  ),
                  title: "Prime Listings in Colombo",
                  text: "Gain access to verified, high-value properties across the most sought-after locations in Colombo and beyond.",
                },
                {
                  icon: (
                    <FaHandshake className="text-[#f09712] text-6xl md:text-7xl" />
                  ),
                  title: "Trusted Guidance & Support",
                  text: "From first viewing to final paperwork, our expert team is by your side—transparent, responsive, and reliable.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex items-start gap-6 lg:gap-10"
                >
                  {item.icon}
                  <div>
                    <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
