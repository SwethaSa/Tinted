import React, { useEffect } from "react";
import "./Footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineWhatsapp } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineCopyright } from "react-icons/ai";
import { PiDotBold } from "react-icons/pi";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="footer">
      <div className="foo">
        <a className="target" target="_blank" href="https://www.instagram.com/">
          <div className="insta">
            <IoLogoInstagram />
          </div>
        </a>
        <a className="target" target="_blank" href="https://www.twitter.com/">
          <div className="twitter">
            <RiTwitterXLine />
          </div>
        </a>
        <a className="target" target="_blank" href="https://www.whatsapp.com/">
          <div className="whatsapp">
            <MdOutlineWhatsapp />
          </div>
        </a>
        <a className="target" target="_blank" href="https://www.facebook.com/">
          <div className="facebook">
            <SlSocialFacebook />
          </div>
        </a>
      </div>
      <hr className="line"></hr>
      <div className="low-foo">
        <div className="copyright">
          <AiOutlineCopyright /> 2024, TINTED
        </div>
        <PiDotBold />
        <div className="refund" onClick={() => navigate("/refund-policy")}>
          Refund Policy
        </div>
        <PiDotBold />
        <div className="privacy" onClick={() => navigate("/privacy-policy")}>
          Privacy Policy
        </div>
        <PiDotBold />
        <div className="terms" onClick={() => navigate("/terms-of-service")}>
          Terms of Service
        </div>
        <PiDotBold />
        <div className="shipping" onClick={() => navigate("/shipping-policy")}>
          Shipping Policy
        </div>
        <PiDotBold />
        <div
          className="contact"
          onClick={() => navigate("/contact-information")}
        >
          Contact Information
        </div>
      </div>
    </div>
  );
}
