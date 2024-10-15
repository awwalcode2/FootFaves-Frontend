import React from 'react'
import MiniNav from '../../MiniNav'
import Footer from "../.././Footer"
import Onlymenshoe from "./Onlymenshoe"
import MenShoeInfo from './MenShoeInfo'

const DisplayMenShoe = () => {
  return (
    <>
      <div>
        <MiniNav/>
        <MenShoeInfo />
        <Onlymenshoe />
        <Footer />
      </div>
    </>
  )
}

export default DisplayMenShoe




