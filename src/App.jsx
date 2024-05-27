import { useState, useEffect } from "react";
import Navbar from "./components/Fragments/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Fragments/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Rental from "./components/pages/Rental";
import Catalog from "./components/pages/Catalog";
function App() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const header = document.querySelector("header"); // Assuming there's a header element in your HTML
    const fixedNav = header.offsetTop;
    if (window.scrollY > fixedNav) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-roboto " onScroll={handleScroll}>
      <Navbar scroll={scroll} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
