import React, { useState } from 'react'
import './Login.scss'
import movixlogo from '../../assets/movix_logo.png';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login_scaffold">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movix Login</title>
        <link rel="canonical" href="https://movixfrontend.netlify.app/" />
      </Helmet>
      <div className="login">
        <div className="login__logo"><img src={movixlogo} alt="Movix logo" /></div>
        <div className="login__caps">
          <h2>Hi, Welcome</h2>
          <p>Please sign-in to start your experience</p>
        </div>

        <Input type="email" input={email} setInput={setEmail} />
        <div className="login__divider"></div>
        <Input type="password" input={password} setInput={setPassword} />
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