import React, {useState} from 'react'
import './Signup.scss'
import movixlogo from '../../assets/movix_logo.png';
import Input from '../../components/Input/Input';
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { endpoint } from '../../utils/endpoints';
import { toast } from 'react-toastify';


const Signup = () => {

  const navigate = useNavigate()

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () =>{

    setLoading(true)
    fetch(`${endpoint}/signup`, {
      method:'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fullname, email, password})
    })
    .then(response => response.json())
    .then(data => {
      if(data.success){
        navigate("/login")
        return toast.success(data.success, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
      return toast.error(data.error, {
        position: toast.POSITION.TOP_RIGHT
      });
    })
    .then(()=> setLoading(false))
    .catch(error => {
      console.log(error)
    })
  }

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
        <Input type="text" input={fullname} setInput={setFullname}/>
        <div className="signup__divider"></div>
        <Input type="email" input={email} setInput={setEmail} />
        <div className="signup__divider"></div>
        <Input type="password" input={password} setInput={setPassword} />
        <div className="signup__divider"></div>
        <div className="signup__divider"></div>
        {
          loading ?
          <div className="btn__auth loading">Register</div>
          :
          <div className="btn__auth" onClick={submit}>Register</div>
        }
        <div className="signup__divider"></div>
        <p className="signup__login">Already have an account? <Link to={'/login'}>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup