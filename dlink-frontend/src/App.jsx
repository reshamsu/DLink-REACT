import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apartments from "./pages/Apartments";
import Houses from "./pages/Houses";
import Villas from "./pages/Villas";
import Commercial from "./pages/Commercial";
import Lands from "./pages/Lands";
import Listing from "./pages/Listing";
import NotFound from "./pages/NotFound";
import AddListing from "./pages/AddListing";
import Info from "./components/listing/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/">
      <div className="D-Link">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/apartments" element={<Apartments />} />
          <Route path="/property/houses" element={<Houses />} />
          <Route path="/property/villas" element={<Villas />} />
          <Route
            path="/property/commercial-properties"
            element={<Commercial />}
          />
          <Route path="/property/lands-plots" element={<Lands />} />
          <Route path="/property/listing/:id" element={<Listing />} />
          {/* <Route path="/property/listing/:id" element={<Info />} /> */}
          <Route path="/listing/add-listing" element={<AddListing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
