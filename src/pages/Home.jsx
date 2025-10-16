import React from "react";
import Hero from "../components/homepage/Hero";
import Analytics from "../components/homepage/Analytics";
import Listings from "../components/homepage/Listings";
import WhyChooseUs from "../components/homepage/WhyChooseUs";
import NewsLetter from "../components/homepage/NewsLetter";
import Form from "../components/homepage/Form";

const Home = () => {
  return (
    <>
      <Hero />
      <Form />
      <Listings />
      <WhyChooseUs />
      <Analytics />
      <NewsLetter />
    </>
  );
};

export default Home;
