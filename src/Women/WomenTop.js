import React from 'react'
import './WomenTop.scss';
import Women2 from './Women2';

const WomenTop = () => {
  return (
    <>
      <div className="womenTop-image-container">
            <img src={require("../SHOES/womenBackground1.jpg")} alt="Image 1" className="womenTop-image " />
        </div>
        <Women2/>
    </>

  )
}

export default WomenTop
{/* <img src={require("../SHOES/men1.png")} alt="Image 2" className="image" /> */}