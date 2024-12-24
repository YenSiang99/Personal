// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header.js";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Gear from "./pages/Gear.tsx";
// import { Button } from "@/components/ui/button";

function App() {
  // const [count, setCount] = useState(0);

  // const toggleTheme = () => {
  //   // Get HTML root element
  //   const html = document.documentElement;

  //   // Toggle dark class
  //   html.classList.toggle("dark");
  // };

  return (
    <Router>
      <div className="min-h-screen">
        <Header></Header>
        <div className="p-6 pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gear" element={<Gear />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
