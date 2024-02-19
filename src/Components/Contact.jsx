import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Refund.css";
import TextField from "@mui/material/TextField";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    setThankYouVisible(true);
    setName("");
    setEmail("");
    setPhone("");
    setComment("");
  };

  return (
    <>
      <Header />
      <div className="ci-container">
        <h1 className="ci-head">Contact Information</h1>
        <p className="ci-para">Email Address: support@tinted.in </p>
        <p className="ci-para">Mobile Number: +91 12345678980 </p>
        <p className="ci-para">
          Operating Address: T Nagar, Chennai, TamilNadu, India{" "}
        </p>
      </div>
      <div
        className="thanks"
        style={!thankYouVisible ? { backgroundColor: "transparent" } : {}}
      >
        {thankYouVisible && (
          <>
            <div className="thanks-icon">
              <IoCheckmarkDoneCircleSharp />
            </div>
            <p className="thanks-text">
              Thanks for contacting us. We'll get back to you as soon as
              possible.
            </p>
          </>
        )}
      </div>
      <div className="fields">
        <form onSubmit={handleSubmit}>
          <div className="name-num">
            <TextField
              className="name-inp"
              id="outlined-search"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              color="warning"
              required
            />
            <TextField
              className="email-inp"
              id="outlined-search"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="warning"
              required
            />
          </div>
          <div>
            <TextField
              className="phone-inp"
              id="outlined-search"
              label="Phone number"
              type="tel"
              inputProps={{
                pattern: "[0-9]{10}",
                title: "Enter a 10-digit phone number",
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              color="warning"
            />
          </div>

          <br />
          <br />
          <div>
            <TextField
              className="comment-inp"
              id="outlined-search"
              label="Comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              color="warning"
            />
          </div>
          <button type="submit" className="buys">
            Send
          </button>
        </form>
      </div>

      <br />
      <Footer />
    </>
  );
}
