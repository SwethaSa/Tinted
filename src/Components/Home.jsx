import React, { useEffect, useState } from "react";
import "./Home.css";
import Featured from "./Featured";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Products from "./Product";
import Testimonials from "./Testimonials";
import Guarantee from "./Guarantee";
import Mail from "./Mail";
import Footer from "./Footer";
import HomeApp from "./HomeApp";
import Headerss from "./Headerss";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  let [isDeco, setIsDeco] = useState(false);

  const [isTop, setIsTop] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const height = 85;
      setIsTop(scrollTop < height);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsDeco(location.pathname === "/");
  }, [location.pathname]);

  return (
    <>
      {screenWidth <= 975 ? (
        <HomeApp />
      ) : (
        <div className="feau">
          <Headerss />
          <div className="bg"></div>
          <Featured />
          <Products />
          <Testimonials />
        </div>
      )}

      <Guarantee />
      <Mail />
      <Footer />
    </>
  );
}
