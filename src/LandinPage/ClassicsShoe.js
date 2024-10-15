import React, { useState } from 'react';
import './ClassicsShoe.scss';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import pic1 from "../SHOES/NikeImages1-1.png"
import pic2 from "../SHOES/NikeImages2.png"
import pic3 from "../SHOES/NikeImages2.jpg"
import pic4 from "../SHOES/NikeImages2__2_png.png"
import pic5 from "../SHOES/NikeImages4.jpg"
import pic6 from "../SHOES/NikeImages1__3.png"
import pic7 from "../SHOES/NikeImages3.jpg"
import pic8 from "../SHOES/NikeImages6.jpg"

const images = [
  pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      pic8,
];

const ClassicsShoe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;
  const totalImages = images.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % totalImages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - visibleCount + totalImages) % totalImages);
  };

  const displayedImages = [
    ...images.slice(currentIndex, currentIndex + visibleCount),
    ...images.slice(0, Math.max(0, (currentIndex + visibleCount) - totalImages)),
  ];

  return (
    <div className="custom-carousel-horizontal">
      <button className="carousel-button prev" onClick={goToPrev}>
        <SlArrowLeft />
      </button>

      <div className="carousel-track">
        <div className="carousel-images">
          {displayedImages.map((img, index) => (
            <div key={index} className="carousel-image">
              <img src={img} alt={`Slide ${index}`} className="real-images" />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-button next" onClick={goToNext}>
        <SlArrowRight />
      </button>
    </div>
  );
};

export default ClassicsShoe;
























