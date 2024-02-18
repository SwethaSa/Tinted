import Footer from "./Footer";
import Header from "./Header";
import "./Refund.css";

export default function ContInfo() {
  return (
    <>
      <Header />
      <div className="ci-container">
        <h1 className="ci-head">Contact Information</h1>
        <p className="ci-para">Email Addciss: support@tinted.in </p>

        <p className="ci-para">Mobile Number: +91 12345678980 </p>

        <p className="ci-para">
          Operating Address: T Nagar, Chennai, TamilNadu, India{" "}
        </p>
      </div>
      <br></br>
      <Footer />
    </>
  );
}
