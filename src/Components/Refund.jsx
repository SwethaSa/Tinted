import Footer from "./Footer";
import Header from "./Header";
import "./Refund.css";

export default function Refund() {
  return (
    <>
      <Header />
      <div className="re-container">
        <h1 className="re-head">Refund policy</h1>
        <p className="re-para">
          Our Return and Refund Policy was last updated 24 Aug 2023
        </p>
        <p className="re-para">Thank you for shopping at TINTED.</p>
        <p className="re-para">
          If for any reason, you are not completely satisfied with a purchase,
          we invite you to review our policy on refunds and returns.
        </p>
        <p className="re-para">
          The following terms are applicable for any products that you've
          purchased from us.
        </p>
        <p className="re-parabold">
          We only offer replacement for goods for size issues under certain
          circumstances, no refunds.
        </p>
        <h4 className="re-h4">Interpretation and Definitions</h4>
        <h2>Interpretation</h2>
        <p className="re-para">
          The words in which the initial letter is capitalised have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in the plural.
        </p>
        <h2>Definitions</h2>
        <ul>
          <p className="re-para">
            For the purposes of this Return and Refund Policy:
          </p>
          <p className="re-para">
            <li>
              “Company” (referred to as either "the Company", "We", "Us" or
              "Our" in this Agreement) refers to TINTED
            </li>
            <li>“Goods” refers to the items offered for sale.</li>
            <li>“Orders” means a request by you to purchase goods from us.</li>
            <li>“Website” refers to tinted.in, accessible from tinted.in</li>
            <li>
              “You” means the individual accessing or using the service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the service, as applicable.
            </li>
          </p>
        </ul>
        <h2>Order Cancellation</h2>
        <p className="re-para">
          Send us an email at tinted@gmail.com & support@tinted.in if you are
          having problems with your order.
        </p>
        <h2>Conditions for Replacement</h2>
        <ul>
          <p className="re-para">
            In order for the Goods to be eligible for a replacement, please make
            sure that:
          </p>
          <p className="re-para">
            <li>The goods were purchased in the last 7 days</li>
            <li>The goods are in the original packaging</li>
            <li>
              The supply of goods is made to your specifications or clearly
              personalized.
            </li>
            <li>
              The supply of goods which according to their nature are not
              suitable to be returned, deteriorate rapidly or where the date of
              expiry is over. The supply of goods that are not suitable for
              return due to health protection or hygiene reasons and were
              unsealed after delivery. The supply of goods which are, after
              delivery, according to their nature, inseparably mixed with other
              items.
            </li>
            <li>
              We reserve the right to refuse replacements of any merchandise at
              our sole discretion.
            </li>
          </p>
        </ul>
        <h2>Returning Goods</h2>
        <p className="re-para">
          You are responsible for the cost and risk of returning the goods to
          Us. You should send the goods to the following address:
        </p>
        <p className="re-para">T Nagar, Chennai, TamilNadu, India</p>
        <p className="re-para">
          We cannot be held responsible for goods damaged or lost in return
          shipment. Therefore, we recommend an insured and trackable mail
          service. We are unable to issue a replacement without actual receipt
          of the goods or proof of received return delivery.
        </p>
        <h2>Contact Us</h2>
        <p className="re-para">
          If you have any questions about our Returns and Refunds Policy, please
          contact us: tinted@gmail.com and support@tinted.in{" "}
        </p>{" "}
        <p className="re-para">
          Contact Details: tinted@gmail.com and support@tinted.in{" "}
        </p>
      </div>
      <br></br>
      <Footer />
    </>
  );
}
