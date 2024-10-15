import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./AvailablePrdOnLandPage.scss"
import { IoIosBasket } from "react-icons/io";

const AvailablePrdOnLandPage = () => {
  const [Women, setWomen] = useState([])
  const api = "https://footfavesbackend.onrender.com"

  useEffect(() => {
    axios.get(`${api}/admin/allwomen`)
      .then((res) => {
        console.log(res);
        console.log(res.data.products);
        setWomen(res.data.products)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  const addtocart =  (i)=>{
    console.log(i);
  }

  let limits = Women.slice(0, 9)
  return (
    <>
      <div className="carry-women d-flex justify-content-around flex-wrap bg-white ">
        {limits.map((res, i) => (
          <div key={i} className='mt-5'>
            <img src={res.productimage} alt="" width={"350px"} height={"350px"} style={{ borderRadius: "12px" }} />

            <div className="flex px-2 mx-2">

              <div>
                <strong className='strong'>{res.productname}</strong>
                <p>{res.productdescription}</p>
                <p className='fs-6'>{res.productprice}</p>
              </div>

              <div>
                <button className='btn btn-primary' onClick={()=>addtocart(res._id)}><IoIosBasket size={"35px"}/></button>
              </div>


            </div>

          </div>

        ))}
      </div>
    </>
  )
}

export default AvailablePrdOnLandPage