import React from 'react'
import WomenPalmInfo from './WomenPalmInfo'
import WomenMiniNav from "../WomenMiniNav"
import OnlyWomenPalm from './OnlyWomenPalm'
import Footer from "../.././Footer"

const DisplayWomenPalm = () => {
  return (
    <div>
        <WomenMiniNav/>
        <WomenPalmInfo/>
        <OnlyWomenPalm/>

        <Footer/>
    </div>
  )
}

export default DisplayWomenPalm