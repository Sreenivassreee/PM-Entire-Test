import React from "react";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import HeaderSection from "./components/common/HeaderSection";
import FooterSection from "./components/common/FooterSection";
export default function App() {
  return (
    <BrowserRouter>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}
