import React from 'react'
import './Login.scss'
import movixlogo from '../../assets/movix_logo.png';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login_scaffold">
      <div className="login">
        <div className="login__logo"><img src={movixlogo} alt="Movix logo"/></div>
        <div className="login__caps">
          <h2>Hi, Welcome</h2>
          <p>Please sign-in to start your experience</p>
        </div>

        <Input type="email"/>
        <div className="login__divider"></div>
        <Input type="password"/>
        <div className="login__divider"></div>
        <div className="login__divider"></div>
        <div className="btn__auth">LOGIN</div>
        <div className="login__divider"></div>
        <p className="login__register">Don't have an account? <Link to={'/signup'}>Register</Link></p>
      </div>
    </div>
  )
}

export default Login