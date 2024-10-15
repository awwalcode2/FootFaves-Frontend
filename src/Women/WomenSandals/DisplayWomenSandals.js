import React from 'react'
import WomenPalmInfo from "../WomenPalm/WomenPalmInfo"
import Footer from "../.././Footer"
import OnlyWomenSandals from './OnlyWomenSandals'
import WomenMiniNav from '../WomenMiniNav'

const DisplayWomenSandals = () => {
  return (
    <div>
        <WomenMiniNav/>
        <WomenPalmInfo/>
        <OnlyWomenSandals/>
        <Footer/>
    </div>
  )
}

export default DisplayWomenSandals