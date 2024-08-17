import React from 'react'
import "./Footer.scss";
import { Link } from 'react-router-dom';
import { RiGlobalLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
    <div className="wrap-pack">
    <div className="pack">
      <div className='first'>
        <Link className='top-link'>Resources</Link>
        <div className='first-down'>
          <Link className='link'>Gift Cards</Link>
          <Link className='link'>Find a Store</Link>
          <Link className='link'>Membership</Link>
          <Link className='link'>FootFaves Journal</Link>
          <Link className='link'>Site Feedback</Link>
        </div>
      </div>

      <div className='first'>
        <Link className='top-link'>Help</Link>
        <div className='first-down'>
          <Link className='link'>Get Help</Link>
          <Link className='link'>Order Status</Link>
          <Link className='link'>Order Cancellations</Link>
          <Link className='link'>Payment Options</Link>
          <Link className='link'>Shipping and Delivery</Link>
          <Link className='link'>Returns</Link>
          <Link className='link'>Gift Card Balance</Link>
          <Link className='link'>Contact Us</Link>
        </div>
      </div>

      <div className='first'>
        <Link className='top-link'>Company</Link>
        <div className='first-down'>
          <Link className='link'>About FootFaves</Link>
          <Link className='link'>Carrers</Link>
          <Link className='link'>News</Link>
          <Link className='link'>Purpose</Link>
          <Link className='link'>Investors</Link>
          <Link className='link'>Sustainbility</Link>
        </div>
      </div>

      <div className='first'>
        <Link className='top-link'>Promotion & Discount</Link>
        <div className='first-down'>
          <Link className='link'>Student</Link>
          <Link className='link'>Millitary</Link>
          <Link className='link'>Medical Profesionals</Link>
          <Link className='link'>Teacher</Link>
          <Link className='link'>Anniversarry</Link>
        </div>
      </div>

      <div className='first'>
        <Link className='top-link' style={{color:"rgba(112, 112, 114, 1)",fontSize:"14px",fontWeight:"500px"}}><RiGlobalLine /> united Kingdom</Link>
      </div>

     </div>
    </div>
    </>
  )
}

export default Footer