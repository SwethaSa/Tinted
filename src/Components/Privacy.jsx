import Footer from "./Footer";
import Header from "./Header";
import "./Privacy.css";

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="po-container">
        <h1 className="po-head">Privacy policy</h1>
        <p className="po-para">Last updated: 09 June 2023 </p>
        <p className="po-para">
          {" "}
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>{" "}
        <p className="po-para">
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>
        <h1 className="po-heads">Disclosure of Your Personal Data</h1>
        <h2>Business Transactions</h2>
        <p className="po-para">
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </p>
        <h2>Law enforcement</h2>
        <p className="po-para">
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </p>
        <h2>Other legal requirements</h2>
        <p className="po-para">
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <ul>
          <p className="re-para">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the public
            </li>
            <li>Protect against legal liability</li>
          </p>
        </ul>
        <h2>Security of Your Personal Data</h2>
        <p className="po-para">
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>
        <h2>Children's Privacy</h2>
        <p className="po-para">
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </p>
        <p className="po-para">
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent's consent before We collect and use that
          information.
        </p>
        <h2>Links to Other Websites</h2>
        <p className="po-para">
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party's site. We strongly advise You to review the Privacy
          Policy of every site You visit.
        </p>
        <p className="po-para">
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>
        <h2>Changes to this Privacy Policy</h2>
        <p className="po-para">
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p className="po-para">
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the 'Last
          updated' date at the top of this Privacy Policy.
        </p>
        <p className="po-para">
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
        <h2>Contact Us</h2>
        <p className="po-para">
          If you have any questions about this Privacy Policy, You can contact
          us By email: support@tinted.in
        </p>
      </div>
      <br></br>

      <Footer />
    </>
  );
}
