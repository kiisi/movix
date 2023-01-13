import React from 'react'
import './Navbar.scss'
import tv from '../../assets/tv.png'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav__logo">
            <img src={tv} alt="Nav logo"/>
            <h1>Movix</h1>
        </div>
        <div className="nav__search">
            <input placeholder="What do you want to watch?"/>
            <span className="material-icons">search</span>
        </div>
        <div className="nav__profile">
            <div className="nav__profile--name">Hi, $Fullname</div>
            <div className="nav__profile--menu">
              <div className="nav__profile--menu__lines"></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar