import React from 'react'
import TopWomenShoeInfo from './TopWomenShoeInfo'
import WomenMiniNav from '../WomenMiniNav'
import OnlyWomenShoe from './OnlyWomenShoe'
import Footer from "../.././Footer"

const WommenShoes = () => {
  return (
    <div>
        <WomenMiniNav/>
       <TopWomenShoeInfo/>
       <OnlyWomenShoe/>
       <Footer/>
    </div>
  )
}

export default WommenShoes