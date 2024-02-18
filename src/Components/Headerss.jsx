import React, { useEffect, useState } from "react";
import "./Home.css";
import { BsSearchHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";
import HomeApp from "./HomeApp";
import SwipeableTemporaryDrawer from "./NavBar";

export default function Headerss() {
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
      {(screenWidth > 975 && location.pathname !== "/") ||
        (screenWidth > 975 && location.pathname !== "/home" && (
          <div className="feau">
            <div className={`header ${isTop ? "" : "scrolled"}`}>
              <h1
                style={{ textDecoration: "none" }}
                onClick={() => navigate("/")}
              >
                Tinted
              </h1>

              <h3
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
                onClick={() => navigate("/")}
              >
                Home
              </h3>

              <h3
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
                onClick={() => navigate("/products")}
              >
                Products
              </h3>

              <h3
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
                onClick={() => navigate("/blogs")}
              >
                Blogs
              </h3>

              <h3
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
                onClick={() => navigate("/contact-us")}
              >
                Contact
              </h3>

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
        ))}

      {screenWidth <= 975 &&
        location.pathname !== "/" &&
        screenWidth <= 975 &&
        location.pathname !== "/home" && (
          <div className="feau">
            <div className={`header ${isTop ? "" : "scrolled"}`}>
              <SwipeableTemporaryDrawer />

              <h1
                style={{ textDecoration: "none" }}
                className="tint-head"
                onClick={() => navigate("/")}
              >
                Tinted
              </h1>

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
