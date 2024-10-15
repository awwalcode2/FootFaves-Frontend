
import React, { useState, useEffect } from 'react';
import './CustomerReviews.scss';
import picture from "../SHOES/adidasSlipper12.jpg";
import picture2 from "../SHOES/womenshoes05.jpg";
import picture3 from "../SHOES/women1 (2).jpeg";
import picture4 from "../SHOES/Women1.jpeg";
import picture5 from "../SHOES/Women3.jpg";

const reviewsData = [
  {
    name: "John Doe",
    review: "Amazing service, will definitely come back again.",
    date: "Oct 1, 2024",
    imgUrl: picture
  },
  {
    name: "Jane Smith",
    review: "The best shopping experience I’ve had in a while.",
    date: "Sept 20, 2024",
    imgUrl: picture2
  },
  {
    name: "Emily Davis",
    review: "Wonderful customer support and prompt delivery.",
    date: "Aug 12, 2024",
    imgUrl: picture3
  },
  {
    name: "Michael Brown",
    review: "Their attention to detail is unmatched!",
    date: "July 15, 2024",
    imgUrl: picture4
  },
  {
    name: "Sarah Wilson",
    review: "Quick delivery and amazing quality.",
    date: "Sept 2, 2024",
    imgUrl: picture5
  }
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <h3 className='happyclient'>OUR HAPPY CLIENTS</h3>
      <div className="circle-container">
        {reviewsData.map((review, index) => {
          const angle = (index - currentIndex) * (360 / reviewsData.length);
          const translateX = Math.cos(angle * (Math.PI / 180)) * 285;
          const translateY = Math.sin(angle * (Math.PI / 180)) * 285;

          return (
            <div
              key={index}
              className={`review-item shadow-lg ${index === currentIndex ? 'active' : ''} `}
              style={{
                transform: `translate(${translateX}px, ${translateY}px)`,
              }}
            >
              <img src={review.imgUrl} alt={review.name} className="customer-img" />
              <p>{review.name}</p>
              <p>{review.review}</p>
              <p>{review.date}</p>
            </div>
          );
        })}
      </div>

      {window.innerWidth > 768 && (
        <div className="center-review">
          <img src={reviewsData[currentIndex].imgUrl} className="customer-img large" alt={reviewsData[currentIndex].name}/>
          <p>{reviewsData[currentIndex].name}</p>
          <p>{reviewsData[currentIndex].review}</p>
          <p>{reviewsData[currentIndex].date}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;

