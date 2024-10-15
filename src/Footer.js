// import React from 'react'
// import "./Footer.scss";
// import { Link } from 'react-router-dom';
// import { RiGlobalLine } from "react-icons/ri";
// const Footer = () => {
//   return (
//     <>
//       <div className="wrap-pack">
//         <div className="pack">

//           <div className='first'>
//             <Link className='top-link'>Company</Link>
//             <div className='first-down'>
//               <Link className='link'>About FootFaves</Link>
//               <Link className='link'>Carrers</Link>
//               <Link className='link'>News</Link>
//               <Link className='link'>Purpose</Link>
//               <Link className='link'>Investors</Link>
//               <Link className='link'>Sustainbility</Link>
//             </div>
//           </div>

//           <div className='first'>
//             <Link className='top-link'>PRODUCTS</Link>
//             <div className='first-down'>
//               <Link className='link'>Shoes</Link>
//               <Link className='link'>Clothing</Link>
//               <Link className='link'>Accessories</Link>
//               <Link className='link'>Release Dates</Link>
//               <Link className='link'>New Arrivals</Link>
//               <Link className='link'>Best Sellers</Link>
//             </div>
//           </div>

//           <div className='first'>
//             <Link className='top-link'>Help</Link>
//             <div className='first-down'>
//               <Link className='link'>Get Help</Link>
//               <Link className='link'>Order Status</Link>
//               <Link className='link'>Order Cancellations</Link>
//               <Link className='link'>Payment Options</Link>
//               <Link className='link'>Shipping and Delivery</Link>
//               <Link className='link'>Returns</Link>
//               <Link className='link'>Gift Card Balance</Link>
//               <Link className='link'>Contact Us</Link>
//             </div>
//           </div>

//           <div className='first'>
//             <Link className='top-link'>Resources</Link>
//             <div className='first-down'>
//               <Link className='link'>Gift Cards</Link>
//               <Link className='link'>Find a Store</Link>
//               <Link className='link'>Membership</Link>
//               <Link className='link'>FootFaves Journal</Link>
//               <Link className='link'>Site Feedback</Link>
//             </div>
//           </div>

//           <div className='first'>
//             <Link className='top-link' style={{ color: "rgba(112, 112, 114, 1)", fontSize: "14px", fontWeight: "500px" }}><RiGlobalLine /> united Kingdom</Link>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default Footer























import React, { useState } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { RiGlobalLine, RiArrowDropDownLine } from 'react-icons/ri';

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="wrap-pack">
      <div className="pack">

        {/* First Section */}
        <div className="first">
          <div onClick={() => toggleDropdown(0)} className="top-link">
            Company <RiArrowDropDownLine className="dropdown-icon" />
          </div>
          <div className={`first-down ${activeIndex === 0 ? 'active' : ''}`}>
            <Link className="link">About FootFaves</Link>
            <Link className="link">Careers</Link>
            <Link className="link">News</Link>
            <Link className="link">Purpose</Link>
            <Link className="link">Investors</Link>
            <Link className="link">Sustainability</Link>
          </div>
          <hr className="divider" />
        </div>

        {/* Second Section */}
        <div className="first">
          <div onClick={() => toggleDropdown(1)} className="top-link">
            Products <RiArrowDropDownLine className="dropdown-icon" />
          </div>
          <div className={`first-down ${activeIndex === 1 ? 'active' : ''}`}>
            <Link className="link">Shoes</Link>
            <Link className="link">Clothing</Link>
            <Link className="link">Accessories</Link>
            <Link className="link">Release Dates</Link>
            <Link className="link">New Arrivals</Link>
            <Link className="link">Best Sellers</Link>
          </div>
          <hr className="divider" />
        </div>

        {/* Third Section */}
        <div className="first">
          <div onClick={() => toggleDropdown(2)} className="top-link">
            Help <RiArrowDropDownLine className="dropdown-icon" />
          </div>
          <div className={`first-down ${activeIndex === 2 ? 'active' : ''}`}>
            <Link className="link">Get Help</Link>
            <Link className="link">Order Status</Link>
            <Link className="link">Payment Options</Link>
            <Link className="link">Shipping and Delivery</Link>
            <Link className="link">Returns</Link>
          </div>
          <hr className="divider" />
        </div>

        {/* Fourth Section */}
        <div className="first">
          <div onClick={() => toggleDropdown(3)} className="top-link">
            Resources <RiArrowDropDownLine className="dropdown-icon" />
          </div>
          <div className={`first-down ${activeIndex === 3 ? 'active' : ''}`}>
            <Link className="link">Gift Cards</Link>
            <Link className="link">Find a Store</Link>
            <Link className="link">Membership</Link>
            <Link className="link">Site Feedback</Link>
          </div>
          <hr className="divider" />
        </div>


      

      </div>


      <div className='country'>
            <Link className='top-link2' style={{ color: "rgba(112, 112, 114, 1)", fontSize: "14px", fontWeight: "500px" }}><RiGlobalLine /> united Kingdom</Link>
          </div>
    </div>
    
  );
};

export default Footer;