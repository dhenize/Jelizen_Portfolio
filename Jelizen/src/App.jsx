import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Members from "./Pages/Members";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";

import backtop from "./assets/pics/up.png";


function App() {

  //FOR BACK-TO-TOP ARROW
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header/>
        <div className="flex-grow">
          <Routes>
            <Route path = "/" element={<Homepage/>} />
            <Route path = "/about" element={<AboutUs/>} />
            <Route path = "/members" element={<Members/>} />
            <Route path = "/project" element={<Projects/>} />
            <Route path = "/contact" element={<ContactUs/>} />
          </Routes>
        </div>

        {showTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 hover:scale-110 transition-transform duration-300"
          >
            <img src={backtop} alt="Back to top" className="w-15 h-15" />
          </button>
        )}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;