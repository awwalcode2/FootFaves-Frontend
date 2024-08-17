import React, { useState } from 'react';
import './ClassicsShoe.scss';
import { SlArrowLeft,SlArrowRight  } from "react-icons/sl";
import pic1 from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/NikeImages1-1.png"
import pic2 from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/NikeImages2.png"
import pic3 from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/NikeImages2.jpg"
import pic4 from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/NikeImages2__2_png.png"
import pic5 from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/NikeImages4.jpg"
import pic6 from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/NikeImages1__3.png"
import pic7 from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/NikeImages3.jpg"
import pic8 from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/NikeImages6.jpg"

const ClassicsShoe = () => {
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
    <div className="carousel">
    <div>
     <h1 className='clsssic-new-arrivals'>NEW ARRIVALS</h1>
     <button className='btn btn-dark ' style={{marginLeft:"50px",borderRadius:"20px"}}>Check new Arrivals</button>
    </div>
      <button className="carousel-button2 prev" onClick={goToPrev}>
      <SlArrowLeft />
      </button>
      <div className="carousel-images">
        {displayedImages.map((img, index) => (
          <div key={index} className="carousel-image">
            <img src={img} alt={`Slide ${index}`} className="real-images"/>
          </div>
        ))}
      </div>
      <button className="carousel-button2 next" onClick={goToNext}>
      <SlArrowRight />
      </button>
    </div>
  );
};

export default ClassicsShoe;

