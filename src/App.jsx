import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import SharpLoginDesign from "./Pages/LogIn";
import Register from "./Pages/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/LogIn" element={<SharpLoginDesign />} />
        <Route path="/Register" element={<Register />} />
        
      </Routes>
    </div>
  );
};

export default App;
