import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

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
      <Home />
    </div>
  );
}

export default App;
