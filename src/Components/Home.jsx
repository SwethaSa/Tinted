import React from "react";
import "./Home.css";
import Featured from "./Featured";
import { BsSearchHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1>Tinted</h1>
        <h3>Home</h3>
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
      <p className="bg"></p>
      <Featured />
    </>
  );
}
