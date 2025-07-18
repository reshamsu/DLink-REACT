import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
      {/* <Listings /> */}
    </div>
  );
}

export default App;
