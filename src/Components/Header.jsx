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
<<<<<<< HEAD
              <h1
                style={{ textDecoration: "none" }}
                onClick={() => navigate("/")}
              >
                Tinted
              </h1>

              <h3
=======
              <Link style={{ textDecoration: "none" }} to="/">
                <h1 onClick={() => navigate("/")}>Tinted</h1>
              </Link>

              <Link
>>>>>>> origin/main
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
<<<<<<< HEAD
                onClick={() => navigate("/")}
              >
                Home
              </h3>

              <h3
=======
                to="/"
              >
                <h3 onClick={() => navigate("/")}>Home</h3>
              </Link>

              <Link
>>>>>>> origin/main
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
<<<<<<< HEAD
                onClick={() => navigate("/products")}
              >
                Products
              </h3>

              <h3
=======
                to="/products"
              >
                <h3 onClick={() => navigate("/products")}>Products</h3>
              </Link>

              <Link
>>>>>>> origin/main
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
<<<<<<< HEAD
                onClick={() => navigate("/blogs")}
              >
                Blogs
              </h3>

              <h3
=======
                to="/blogs"
              >
                <h3 onClick={() => navigate("/blogs")}>Blogs</h3>
              </Link>
              <Link
>>>>>>> origin/main
                style={{
                  textDecoration: isDeco ? "underline" : "none",
                  color: "black",
                }}
<<<<<<< HEAD
                onClick={() => navigate("/contact-us")}
              >
                Contact
              </h3>
=======
                to="/contact-us"
              >
                <h3 onClick={() => navigate("/contact-us")}>Contact</h3>
              </Link>
>>>>>>> origin/main
              <h4 className="search">
                <BsSearchHeartFill />
              </h4>
              <h4 className="account">
                <RiAccountPinCircleFill />
              </h4>
              <h4 className="carts">
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

<<<<<<< HEAD
              <h1
                style={{ textDecoration: "none" }}
                className="tint-head"
                onClick={() => navigate("/")}
              >
                Tinted
              </h1>

=======
              <Link style={{ textDecoration: "none" }} to="/">
                <h1 className="tint-head" onClick={() => navigate("/")}>
                  Tinted
                </h1>
              </Link>
>>>>>>> origin/main
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
