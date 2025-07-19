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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
