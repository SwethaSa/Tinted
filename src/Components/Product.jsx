import { useEffect, useState } from "react";
import "./Products.css";
import Card from "react-bootstrap/Card";
import { BsArrowRightShort } from "react-icons/bs";

export default function Products() {
  const [imageSrc, setImageSrc] = useState("");
  const API = "https://backend-swethasa.vercel.app/products/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error("Image not found");
        }

        const data = await response.json();
        // Filter the data to include only objects with image2 property
        const filteredData = data.filter((item) => item.image2);
        if (filteredData.length > 0) {
          // Randomly select one of the filtered objects
          const randomIndex = Math.floor(Math.random() * filteredData.length);
          setImageSrc(filteredData[randomIndex]);
        } else {
          throw new Error("No images found");
        }
      } catch (error) {
        console.error("Error Retrieving Data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <hr></hr>
      <p className="top-prod">Our Top Products</p>
      <div className="main">
        <Card style={{ width: "20cm" }} className="card">
          <div className="first">
            {imageSrc && (
              <Card.Img
                className="card-img"
                variant="top"
                src={imageSrc.image2}
              />
            )}
          </div>
          <div className="second">
            <Card.Body>
              <p className="by">{imageSrc.by}</p>
              <h2 className="name">{imageSrc.name}</h2>
              <p className="price">Rs.{imageSrc.price}</p>
              <p className="checkout">Secure Checkout with </p>
              <div className="checkout-opt">
                <img className="gpay" src="./src/assets/gpa.png" alt="gpay" />

                <img className="visa" src="./src/assets/vsa.png" alt="visa" />

                <img className="ms" src="./src/assets/ms.png" alt="ms" />
              </div>
              <button className="cart">Add to Cart</button>
              <button className="buy">Buy Now</button>
              <div className="arrow">
                <p className="desc">view full details</p>{" "}
                <div className="icon">
                  <BsArrowRightShort />
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
}
