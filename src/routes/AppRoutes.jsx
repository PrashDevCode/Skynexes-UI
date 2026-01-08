import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import HowWeWork from "../pages/HowWeWork";
import HireDevelopers from "../pages/HireDevelopers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/how-we-work" element={<HowWeWork />} />
      <Route path="/hire-developers" element={<HireDevelopers />} />
    </Routes>
  );
};

export default AppRoutes;

