import React from 'react'
import Footer from '../../Footer'
import MiniNav from '../../MiniNav'
import OnlyMenSlides from './OnlyMenSlides'
import MenSlidesInfo from './MenSlidesInfo'

const DisplayMenSlides = () => {
    return (
        <>
            <MiniNav />
            <MenSlidesInfo/>
            <OnlyMenSlides/>
            <Footer />
        </>
    )
}

export default DisplayMenSlides