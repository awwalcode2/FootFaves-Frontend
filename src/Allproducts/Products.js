import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import DisplayWomenPage from '../Women/DisplayWomenPage';
import DISplaymenPage from '../Men/DISplaymenPage';

const Products = () => {

    const {productName , otherproduct} = useParams()
        console.log(productName, otherproduct)

        
  return (
    <>
        <DISplaymenPage/>
        

{/* { productName == "Women" &&
        <DisplayWomenPage />
    }
     */}
    </>
  )
}

export default Products