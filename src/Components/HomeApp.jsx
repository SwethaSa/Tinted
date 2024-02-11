import React, { useEffect, useState } from "react";
import "./HomeApp.css";
import Featured from "./Featured";
import { BsSearchHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Products from "./Product";
import Testimonials from "./Testimonials";
import SwipeableTemporaryDrawer from "./NavBar";

export default function HomeApp() {
  const navigate = useNavigate();
  const location = useLocation();

  let [isDeco, setIsDeco] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isTop, setIsTop] = useState(false);

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
      <div className="feau">
        <div className={`header ${isTop ? "" : "scrolled"}`}>
          <SwipeableTemporaryDrawer />

          <Link style={{ textDecoration: "none" }} to="/">
            <h1 className="tint-head" onClick={() => navigate("/")}>
              Tinted
            </h1>
          </Link>
          <h4 className="tint-search">
            <BsSearchHeartFill />
          </h4>
          {screenWidth <= 750 ? null : (
            <h4 className="tint-account">
              <RiAccountPinCircleFill />
            </h4>
          )}
          <h4 className="tint-cart">
            <BsFillBagHeartFill />
          </h4>
        </div>
        {screenWidth <= 700 ? (
          <video autoPlay loop muted style={{ maxWidth: "100%" }}>
            <source src="/src/assets/BGVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="bg"></div>
        )}
        <Featured />
        <Products />
        <Testimonials />
      </div>
    </>
  );
}
