import React from "react";
import Hero from "../components/homepage/Hero";
import Analytics from "../components/homepage/Analytics";
import Listings from "../components/homepage/Listings";
import WhyChooseUs from "../components/homepage/WhyChooseUs";
import NewsLetter from "../components/homepage/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <Analytics />
      <Listings />
      <WhyChooseUs />
      <NewsLetter />
    </>
  );
};

export default Home;
