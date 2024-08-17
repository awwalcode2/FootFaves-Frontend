import React, { useState, useEffect } from 'react';
import picture from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/footFaves Background.png"
import pic from "/Users/mac/Desktop/E-COMMERCE WEbsite/e-commerce-website/src/SHOES/adidas1 (1).jpg"
import './TopCarousel.scss'
import { FaCircleLeft,FaCircleRight  } from "react-icons/fa6";
const images = [
  "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/7.29/NEW-BALANCE-HERO-STANDARD-1440x650._FMwebp_.jpg",
  picture,
  pic,
];
const TopCarousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handleBack}><FaCircleLeft /></button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}/>
      <button className="carousel-button next" onClick={handleNext}><FaCircleRight /></button>
    </div>
  );
};


export default TopCarousels;
