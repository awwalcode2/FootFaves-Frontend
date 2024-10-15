import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import MiniNav from '../MiniNav'
import MenTop from './MenTop'
import { useNavigate, useParams } from 'react-router-dom'
import FilteringProducts from '../Allproducts/FilteringProducts'
import WomenTop from '../Women/WomenTop'
import axios from 'axios'
import Notfoundpage from '../Notfoundpage'
import MenShoeInfo from './MenShoe/MenShoeInfo'
import MenPalmInfo from './MenPalm/MenPalmInfo'
import MenSlidesInfo from './MenSlides/MenSlidesInfo'
import TopWomenShoeInfo from '../Women/WomenShoes/TopWomenShoeInfo'
import WomenPalmInfo from '../Women/WomenPalm/WomenPalmInfo'
import MenButtonStyling from './MenButtonStyling'
import MenpalmButtomStyling from './MenpalmButtomStyling'
import MenslidesButtomStyling from './MenslidesButtomStyling'
import WomenSlidesStyling from "../Women/WomenSlidesStyling"
import WomensSandalsStyling from "../Women/WomensSandalsStyling"
import WomenShoesButtomStyling from "../Women/WOmenShoesButtomStyling"

const DISplaymenPage = () => {

  const { productName, otherproduct } = useParams();
  console.log(useParams);
  console.log(productName, otherproduct);
  const [reload, setreload] = useState(false);

  useEffect(() => {


  }, [reload])
  // const [display, setdisplay] = useState(true);
  // const navigate = useNavigate()



  return (
    <>
      {
        productName == "Men" || productName == "Women" ?
          <div className='men-container' style={{ backgroundColor: "#f5f5f5" }}>
            <Navbar />
            <MiniNav category={productName} />


            {(() => {
              if (!otherproduct && productName == "Men") {
                return <MenTop />;

              } else if (!otherproduct && productName == "Women") {
                return <WomenTop />
              } else if (productName == "Men" && otherproduct == "shoe") {
                return <MenShoeInfo />
              } else if (productName == "Men" && otherproduct == "palm") {
                return <MenPalmInfo />
              } else if (productName == "Men" && otherproduct == "slides") {
                return <MenSlidesInfo />
              } else if (productName == "Women" && otherproduct == "shoe") {
                return <TopWomenShoeInfo />
              } else if (productName == "Women" && otherproduct == "slides") {
                return <WomenPalmInfo />
              } else if (productName == "Women" && otherproduct == "sandals") {
                return <WomenPalmInfo />
              }
              else {
                return;

              }

            })()}

            <FilteringProducts
              productName={productName}
              otherproduct={otherproduct}
            />

            {(() => {
              if (productName == "Men" && otherproduct == "shoe") {
                return <MenButtonStyling />
              }else if (productName == "Men" && otherproduct == "palm") {
               return <MenpalmButtomStyling/>
              }else if (productName == "Men" && otherproduct == "slides") {
                return <MenslidesButtomStyling/>
              }else if (productName == "Women" && otherproduct == "shoe") {
                return <WomenShoesButtomStyling/>
              }else if (productName == "Women" && otherproduct == "slides") {
                return <WomenSlidesStyling/>
              }else if (productName == "Women" && otherproduct == "sandals") {
                return <WomensSandalsStyling/>
              }
            })()}
            <Footer />
          </div>
          :
          <Notfoundpage />
      }
    </>

    //   < >
    //     <div className='men-container' style={{ backgroundColor: "#f5f5f5" }}>

    //       <Navbar />
    //       <MiniNav category={productName} />


    //       {productName == "Men" ?
    //   <MenTop/>:
    //   <WomenTop />
    // }

    //       <FilteringProducts
    //         productName={productName}
    //         otherproduct={otherproduct}
    //       />
    //       <Footer />

    //     </div>
    //   </>
  )
}

export default DISplaymenPage

