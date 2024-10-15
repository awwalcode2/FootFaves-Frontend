import React from 'react'
import TopCarousel from './TopCarousel'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ClassicsShoe from './ClassicsShoe'
import CustomerReviews from './CustmerReviews'
import Categories from './Categories'

const DisplayingLandingpage = () => {

  return (
    <div style={{backgroundColor :"white"}}>
      <Navbar />
      <TopCarousel />
      <ClassicsShoe/>
      <Categories/>
      <CustomerReviews/>
      <Footer/>
    </div>
  )
}

export default DisplayingLandingpage