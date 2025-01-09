import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
    <h1>Welcome to Ama Earth Group </h1>
    <p>Our mission is to regenerate the planet</p>  
    <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>Get Started
        </Button>
         <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>Learn More
        </Button>
    </div>  
    </div>
  )
}

export default HeroSection