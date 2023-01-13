import React from 'react'
import './Hero.scss';
import Navbar from '../../../layout/Navbar/Navbar';

const Hero = () => {
  return (
    <div className="max-wrapper hero-wrapper">
      <div className="max-wrapper__content">
        <Navbar />
      </div>
    </div>
  )
}

export default Hero