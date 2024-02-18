import { Card } from "react-bootstrap";
import "./Guarantee.css";

export default function Guarantee() {
  return (
    <>
      <div className="guarantee-container">
        <div className="guarantee-background"></div>
        <hr className="gr-hr"></hr>
        <div className="guar">
          <Card className="gr-card">
            <div className="gr-test">Our Guarantee</div>
            <p className="gr-desc">
              All our products have unmatched quality with shipping / delivery
              all over India. Orders and Support of 24 hours a day, 7 days a
              week via Email, Social Media and Text.
            </p>
            <div className="gr-shop-btn">
              <button className="gr-shop">Shop Now</button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
