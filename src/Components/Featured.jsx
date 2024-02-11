import "./Featured.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Featured.css";
import { Navigation } from "swiper/modules";

export default function Featured() {
  let [images, setImages] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);

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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 950 && screenWidth > 550) {
        setSlidesPerView(2);
      } else if (screenWidth <= 550) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); // Call handleResize initially to set initial slidesPerView value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="feau">
        <h2>Featured Products</h2>
        <Swiper
          slidesPerView={slidesPerView}
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
      </div>
    </>
  );
}
