import "./Featured.css";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import * as dotenv from "dotenv";

// dotenv.config();

export default function Featured() {
  let [image, setImage] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await fetch("API");
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
      {image.map((imageUrl) => (
        <img key={imageUrl.idno} src={imageUrl.image1} alt={imageUrl.name} />
      ))}
      {/* <Carousel>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
}
