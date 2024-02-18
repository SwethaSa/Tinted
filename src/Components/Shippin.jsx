import Footer from "./Footer";
import Header from "./Header";
import "./Refund.css";

export default function Shipping() {
  return (
    <>
      <Header />
      <div className="re-container">
        <h1 className="re-head">Shipping policy</h1>
        <p className="re-paras">Shipping methods and associated costs: </p>
        <p className="re-para">
          COD payments accepted, Payment Gateway accepted as well. Charges for
          COD depending on the product and listed on the product page. Payment
          Gateway charges depending on the order value.
        </p>
        <p className="re-paras">
          Estimated delivery times and factors affecting them:
        </p>
        <p className="re-para">
          7-10 days delivery time. In emergency conditions, the delivery time
          may exceed. You can cancel the order by contacting us through the
          official email.
        </p>
        <p className="re-paras">
          Order tracking options and provides relevant instructions:
        </p>
        <p className="re-para">
          Order tracking codes provided directly through mail confirmation along
          with WhatsApp communication for order updates.
        </p>
      </div>
      <br></br>
      <Footer />
    </>
  );
}
