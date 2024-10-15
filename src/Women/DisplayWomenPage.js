import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import WomenMiniNav from './WomenMiniNav'
import WomenTop from './WomenTop'
import Women2 from './Women2'
import AvailablePrdOnLandPage from './AvailablePrdOnLandPage'
import { useParams } from 'react-router-dom'
import MiniNav from '../MiniNav'



const DisplayWomenPage = () => {
  const params = useParams();
  
  useEffect(() => {
    console.log(params);
  }, [])
  
  return (
    <>
      <div className="Women-container" style={{ backgroundColor: "#f5f5f5" }}>
        <Navbar />
        <MiniNav category={params.productName}/>
        <WomenTop />
        <Women2 />
        <AvailablePrdOnLandPage/>
        <Footer />
      </div>
    </>
  )
}

export default DisplayWomenPage



{/* { Women.slice(0,1).filter((filter) => filter.prodCategory[0] === "men" ).map((res) =>
              (
            <>
            <h1>{res.productdescription}</h1>
             <img src={res.productimage} alt="" />

            </>
       
          ))

          } */}