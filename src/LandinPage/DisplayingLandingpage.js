import React from 'react'
import TopCarousel from './TopCarousel'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ClassicsShoe from './ClassicsShoe'

const DisplayingLandingpage = () => {

  return (
    <div style={{backgroundColor :"white"}}>
      <Navbar />
      <TopCarousel />
      <ClassicsShoe/>
      <Footer/>
    </div>
  )
}

export default DisplayingLandingpage