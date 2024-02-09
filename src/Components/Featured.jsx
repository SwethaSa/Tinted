import "./Featured.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Featured.css";
import { Navigation } from "swiper/modules";

export default function Featured() {
  let [images, setImages] = useState([]);

  let API = "https://backend-swethasa.vercel.app/products/all";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await fetch(API);
        if (!result.ok) {
          throw new Error("Image not found!!");
        }
        const data = await result.json();
        // Duplicate the first image at the end of the array
        let sprData = [...data];
        let rand = Math.floor(Math.random() * 20) + 5;
        let duplicatedData = [];

        for (let i = 0; i < rand; i++) {
          duplicatedData.push(...sprData);
        }

        setImages(duplicatedData);
        console.log(duplicatedData);
      } catch (error) {
        console.error("Error Fetching Images", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
      <h2>Featured Products</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((product, index) => (
          <SwiperSlide key={index}>
            <img src={product.image1} alt={product.name} />
            <p>{product.name}</p>
            <p>Rs.{product.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
