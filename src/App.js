import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Contacts from "./Pages/Contacts";
import Services from "./Pages/Services";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
