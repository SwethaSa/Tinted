import "./Footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineWhatsapp } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineCopyright } from "react-icons/ai";
import { PiDotBold } from "react-icons/pi";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foo">
          <div className="insta">
            <IoLogoInstagram />
          </div>
          <div className="twitter">
            <RiTwitterXLine />
          </div>
          <div className="whatsapp">
            <MdOutlineWhatsapp />
          </div>
          <div className="facebook">
            <SlSocialFacebook />
          </div>
        </div>
        <hr className="line"></hr>
        <div className="low-foo">
          <div className="copyright">
            <AiOutlineCopyright /> 2024, TINTED
          </div>
          <PiDotBold />
          <div className="refund">Refund Policy</div>
          <PiDotBold />
          <div className="privacy">Privacy Policy</div>
          <PiDotBold />
          <div className="terms">Terms of Service</div>
          <PiDotBold />
          <div className="shipping">Shipping Policy</div>
          <PiDotBold />
          <div className="contact">Contact Information</div>
        </div>
      </div>
    </>
  );
}
