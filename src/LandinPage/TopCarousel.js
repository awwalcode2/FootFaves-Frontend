import React from 'react';
import picture from "../SHOES/footFaves Background.png";
import pic from "../SHOES/adidas1 (1).jpg";
import caroulselsImage from "../SHOES/caroulselsBackground.webp";
import './TopCarousel.scss';

const images = [
  caroulselsImage,
  picture,
  pic,
];

const TopCarousels = () => {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={caroulselsImage} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={picture} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default TopCarousels;










// import React, { useState, useEffect } from 'react';
// import picture from "../SHOES/footFaves Background.png";
// import pic from "../SHOES/adidas1 (1).jpg";
// import caroulselsImage from "../SHOES/caroulselsBackground.webp";
// import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";

// const images = [
//   caroulselsImage,
//   picture,
//   pic,
// ];

// const TopCarousels = () => {

//   return (
//     <>
//       <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="10000">
//     <img src={caroulselsImage} class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item" data-bs-interval="2000">
//     <img src={picture} class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//     <img src={pic} class="d-block w-100"/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     </>
//   );
// };

// export default TopCarousels;

























































// import React, { useState, useEffect } from 'react';
// import picture from "../SHOES/footFaves Background.png";
// import pic from "../SHOES/adidas1 (1).jpg";
// import caroulselsImage from "../SHOES/caroulselsBackground.webp";
// import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";

// // List of images for the carousel
// const images = [
//   caroulselsImage,
//   picture,
//   pic,
// ];

// const TopCarousels = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Track the active image index

//   // Automatically change images every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length); // Increment index, loop back to start
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, []);


//   const goToPrevious = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <>
//       <div id="carouselExampleIndicators" className="carousel slide">
//         <div className="carousel-indicators">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to={index}
//               className={index === activeIndex ? 'active' : ''}
//               aria-current={index === activeIndex ? 'true' : 'false'}
//               aria-label={`Slide ${index + 1}`}
//               onClick={() => setActiveIndex(index)} // Click to go to specific image
//             ></button>
//           ))}
//         </div>
//         <div className="carousel-inner">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
//             >
//               <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="prev"
//           onClick={goToPrevious}
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="next"
//           onClick={goToNext}
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// };

// export default TopCarousels;
