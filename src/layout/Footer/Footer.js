import React from 'react'
import './Footer.scss'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
const Footer = () => {
    return (
        <div className="max-wrapper standard__spacing--top">
            <div className="max-wrapper__content footer">
                <div className="footer__media">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={youtube} alt="youtube" />
                    <img src={twitter} alt="twitter" />
                </div>
                <div className="footer__divider"></div>
                <div className="footer__main">
                    <span>Conditions of Use</span>
                    <span>Privacy &amp; Policy</span>
                    <span>Press Room</span>
                </div>
                <div className="footer__divider"></div>
                <div className="footer__copyright">
                    &copy; 2023 Movix by Kiisi Felix
                </div>
            </div>
        </div>
    )
}

export default Footer