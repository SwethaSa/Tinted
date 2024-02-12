import React, { useEffect, useState } from "react";
import "./Home.css";
import { BsSearchHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";
import HomeApp from "./HomeApp";
import SwipeableTemporaryDrawer from "./NavBar";

export default function Header() {
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
      {screenWidth > 975 &&
        location.pathname !== "/" &&
        screenWidth > 975 &&
        location.pathname !== "/home" && (
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
                to="/products"
              >
                <h3 onClick={() => navigate("/products")}>Products</h3>
              </Link>

              <Link
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
                to="/blogs"
              >
                <h3 onClick={() => navigate("/blogs")}>Blogs</h3>
              </Link>
              <Link
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
                to="/contact"
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
          </div>
        )}

      {screenWidth <= 975 &&
        location.pathname !== "/" &&
        screenWidth <= 975 &&
        location.pathname !== "/home" && (
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
          </div>
        )}
    </>
  );
}
