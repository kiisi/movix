import React, { useState } from 'react'
import './Login.scss'
import movixlogo from '../../assets/movix_logo.png';
import Input from '../../components/Input/Input';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { endpoint } from '../../utils/endpoints';
import { useSelector, useDispatch } from 'react-redux';
import authSlice from '../../store/slices/authSlice'
import { toast } from 'react-toastify';

const Login = () => {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { authLogin } = authSlice.actions

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(authState)

  const login = () =>{

    fetch(`${endpoint}/login`, {
      method:'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(data => {
      if(data.error){
        return toast.error(data.error, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
     
      dispatch(authLogin(data))
      navigate("/")
      return toast.success(data.success, {
        position: toast.POSITION.TOP_RIGHT
      });
      
    })
    .catch(error => {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
      console.log(error)
    })
  }

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
        <div className="btn__auth" onClick={login}>LOGIN</div>
        <div className="login__divider"></div>
        <p className="login__register">Don't have an account? <Link to={'/signup'}>Register</Link></p>
      </div>
    </div>
  )
}

export default Login