import { useEffect, useState } from "react";
import "./Products.css";
import Card from "react-bootstrap/Card";

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
          setImageSrc(filteredData[randomIndex].image2);
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
      <p className="top-prod">Our Top Products</p>
      <div className="main">
        <Card className="card">
          <div>
            {imageSrc && (
              <Card.Img className="card-img" variant="top" src={imageSrc} />
            )}
          </div>
          <div>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              {/* <Card.Text>
           
          </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
}
