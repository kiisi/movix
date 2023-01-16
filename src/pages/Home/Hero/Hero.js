import React from 'react'
import './Hero.scss';
import Navbar from '../../../layout/Navbar/Navbar';
import imdb from '../../../assets/imdb.png'
import apple from '../../../assets/apple.png';
import play from '../../../assets/play.png';

const Hero = () => {

  return (
    <div className="max-wrapper hero-wrapper">
      <div className="max-wrapper__content">
        <Navbar />
        <div className="hero">
          <h1 className="hero__header">John Wick 3: Parabellum </h1>
          <div className="hero__divider"></div>
          <div className="hero__rating">
            <div className="hero__rating--a">
              <img src={imdb} alt="IMDB" />
              <span>86.0/100</span>
            </div>
            <div className="hero__rating--b">
              <img src={apple} alt="apple"/>
              <span>97%</span>
            </div>
          </div>
          <div className="hero__divider"></div>
          <div className="hero__content">
            John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
          </div>
          <div className="hero__divider"></div>
          <div className="hero__btn">
            <img src={play} alt="play"/>
            <span>WATCH TRAILER</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero