import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./OnlyWomenShoe.scss"
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";

const OnlyWomenShoe = () => {
  const [OnlyWomen, setOnlyWomen] = useState([])
  const [reload, setreload] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:7777/admin/WomenShoe")
      .then((res) => {
        setOnlyWomen(res.data.products)
        setreload(true)
        console.log(OnlyWomen);
      }).catch((err) => {
        console.log(err);
        setreload(false)
      })
  }, [reload])
  return (

    <>
      <div className="onlyWomen">
        {OnlyWomen.map((Women, i) => (
          <div className='eachPrd'>
            <img src={Women.productimage} width={"360px"} height={"360px"} style={{ borderRadius: "8px" }} />
            <div className='cartbag'>
              <button className='col-6 btn btn-primary'><MdAddShoppingCart size={"35px"} /></button>
            </div>

            <div className="stars">

              <div className='pricedescr'>
                <p>{Women.productdescription}</p>
                <p style={{ fontSize: "18px", fontWeight: "400" }}>{Women.productprice}</p>
              </div>

              <div>
                <span><MdOutlineStarPurple500 /></span>
                <span><MdOutlineStarPurple500 /></span>
                <span><MdOutlineStarPurple500 /></span>
                <span><MdOutlineStarPurple500 /></span>
                <span><IoStarHalfOutline /></span>
              </div>

            </div>
          </div>

        ))}
      </div>

    </>
  )
}

export default OnlyWomenShoe