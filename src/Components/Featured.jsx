import "./Featured.css";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

export default function Featured() {
  let [image, setImage] = useState([]);

  let API = "https://backend-swethasa.vercel.app/products/all";
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await fetch(API);
        if (!result.ok) {
          throw new Error("Image not found!!");
        }
        const data = await result.json();
        setImage(data);
        console.log(data);
      } catch (error) {
        console.error("Error Fetching Images", error);
      }
    };
    fetchImages();
  }, []);
  return (
    <>
      <h2>Featured Products</h2>
      <div className="Caro">
        {image.map((imageUrl, index) => (
          <Carousel.Item
            key={imageUrl.idno}
            interval={index === 0 ? 1000 : 500}
          >
            <img src={imageUrl.image1} alt={imageUrl.name} />
            <p>{imageUrl.name}</p>
            <p>Rs.{imageUrl.price}</p>
          </Carousel.Item>
        ))}
      </div>
    </>
  );
}
