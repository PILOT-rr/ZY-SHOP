import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/1-Navbar/Navbar";
import Hero from "./components/2-Hero/Hero";
import Category from "./components/3-Category/Category";
import Category2 from "./components/3-Category/Category2";
import Services from "./components/4-Services/Services";
import Banner from "./components/5-Banner/Banner";

import Noires16 from "./assets/hero/Noires16.png";
import Vert14 from "./assets/hero/Vert14.png";

import Products from "./components/6-Products/Products";
// import Partners2  from "./components/8-Partners/Partners2.jsx";
import Blogs from "./components/7-Blogs/Blogs";
import Partners from "./components/8-Partners/Partners.jsx";

import Footer from "./components/9-Footer/Footer.jsx";
import Popup from "./components/10-Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fresh",
  date: "10 March to 28 Jan",
  image: Noires16,
  title2: "Tender",
  title3: "Hight Quality",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Delicious Taste",
  date: "14 Jan to 28 Jan",
  image: Vert14,
  title2: "Natural",
  title3: "New season",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [showScrollBTN, setShowScrollBTN] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      {/* <Products2 /> */}
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <a
        href="#up"
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1.5s" }}
        onClick={(e) => e.preventDefault()}
      
      >
        <button className="scroll2Top bg-white dark:bg-gray-900">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-up-circle "
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="16 12 12 8 8 12"></polyline>
            <line x1="12" y1="16" x2="12" y2="8"></line>
          </svg>
        </button>
      </a>
    </div>
  );
};

export default App;
