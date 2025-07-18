import React from "react";
import Hero from "../components/homepage/Hero";
import Analytics from "../components/homepage/Analytics";
import Product from "../components/homepage/Product";
import Listings from "../components/homepage/Listings";

const Home = () => {
  return (
    <div>
      <Hero />
      <Analytics />
      <Product />
      <Listings />
    </div>
  );
};

export default Home;
