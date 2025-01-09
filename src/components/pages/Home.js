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
            <Chart />
            <PictureAndText />
            <CTA />
        </>
    )
}
export default Home