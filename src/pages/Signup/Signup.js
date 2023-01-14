import React from 'react'
import './Signup.scss'
import movixlogo from '../../assets/movix_logo.png';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Signup = () => {
  return (
    <div className="signup_scaffold">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movix Signup</title>
        <link rel="canonical" href="https://movixfrontend.netlify.app/" />
      </Helmet>
      <div className="signup">
        <div className="signup__logo"><img src={movixlogo} alt="Movix logo" /></div>
        <div className="signup__caps">
          <h2>Hi, Welcome</h2>
          <p>Please sign-up to start your experience</p>
        </div>

        <Input type="text" />
        <div className="signup__divider"></div>
        <Input type="email" />
        <div className="signup__divider"></div>
        <Input type="password" />
        <div className="signup__divider"></div>
        <div className="signup__divider"></div>
        <div className="btn__auth">LOGIN</div>
        <div className="signup__divider"></div>
        <p className="signup__login">Already have an account? <Link to={'/login'}>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup