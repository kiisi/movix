import React from 'react'
import './Navbar.scss';
import logo from '../../assets/logo.png';
import light_mode from '../../assets/sun.png'
import chevron_right from '../../assets/chevron-right.png';
import chevron_down from '../../assets/chevron-down.png';

const Navbar = () => {
  return (
    <nav className="max-wrapper nav-wrapper">
        <div className="max-wrapper-content nav">
          <div className="nav__primary">
            <div className="nav__primary--logo">
              <img src={logo} alt="logo"/>
            </div>
            <div className="nav__primary--theme-color">
              <span>LIGHT</span><img src={light_mode} alt="light_mode"/>
            </div>
          </div>
          <div className="nav__secondary">
              <div className="nav__secondary--chevron-right">
                <img src={chevron_right} alt="chevron-right"/>
              </div>
              <div className="nav__secondary--item">
                <h4>CASH BALANCE</h4>
                <p>₦8,374,763</p>
              </div>
              <div className="nav__secondary--item">
                <h4>SECURITIES VALUE</h4>
                <p>₦8,374,763</p>
              </div>
              <div className="nav__secondary--item">
                <h4>LOAN BALANCE</h4>
                <p>₦7,542,246</p>
              </div>
              <div className="nav__secondary--demo">
                <p>DEMO</p>
                <img src={chevron_down} alt="chevron-down"/>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar