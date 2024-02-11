import React, { useEffect, useState } from "react";
import "./Home.css";
import Featured from "./Featured";
import { BsSearchHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Products from "./Product";
import Testimonials from "./Testimonials";
import Guarantee from "./Guarantee";
import Mail from "./Mail";
import Footer from "./Footer";
import SwipeableTemporaryDrawer from "./NavBar";
import HomeApp from "./HomeApp";

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
          <div className={`header ${isTop ? "" : "scrolled"}`}>
            <Link style={{ textDecoration: "none" }} to="/">
              <h1 onClick={() => navigate("/")}>Tinted</h1>
            </Link>

            <Link
              style={{
                textDecoration: isDeco ? "underline" : "none",
                color: "black",
              }}
              to="/"
            >
              <h3 onClick={() => navigate("/")}>Home</h3>
            </Link>

            <Link
              style={{
                textDecoration: isDeco ? "underline" : "none",
                color: "black",
              }}
              to="/"
            >
              <h3 onClick={() => navigate("/products")}>Products</h3>
            </Link>

            <Link
              style={{
                textDecoration: isDeco ? "underline" : "none",
                color: "black",
              }}
              to="/"
            >
              <h3 onClick={() => navigate("/blogs")}>Blogs</h3>
            </Link>
            <Link
              style={{
                textDecoration: isDeco ? "underline" : "none",
                color: "black",
              }}
              to="/"
            >
              <h3 onClick={() => navigate("/contact")}>Contact</h3>
            </Link>
            <h4 className="search">
              <BsSearchHeartFill />
            </h4>
            <h4 className="account">
              <RiAccountPinCircleFill />
            </h4>
            <h4>
              <BsFillBagHeartFill />
            </h4>
          </div>
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
