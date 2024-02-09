import React, { useEffect, useState } from "react";
import "./Home.css";
import Featured from "./Featured";
import { BsSearchHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  let [isDeco, setIsDeco] = useState(false);

  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const height = 82;
      setIsTop(scrollTop < height);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsDeco(location.pathname === "/");
  }, [location.pathname]);
  return (
    <>
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
        {}
        {/* <h3>Home</h3> */}
        <h3>Products</h3>
        <h3>Blogs</h3>
        <h3>Contact</h3>
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
    </>
  );
}
