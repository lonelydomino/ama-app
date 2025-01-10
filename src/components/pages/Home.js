import '../../App.css'
import React from 'react'
import HeroSection from '../HeroSection'
import Chart from '../Chart'
import PictureAndText from '../PictureAndText'
import CTA from "../CTA";

function Home () {
    return(
        <>
            <HeroSection />
            <h1 className='chart-container-h1'>It's up to us to help the planet</h1>
            <PictureAndText />
            <CTA />
        </>
    )
}
export default Home