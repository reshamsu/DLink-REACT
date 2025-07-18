import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/homepage/Hero";
import Listings from "./components/homepage/Listings";
// import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Listings />
    </div>
  );
}

export default App;
