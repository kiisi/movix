import React, {useState} from 'react'
import './Input.scss'

const Input = ({type, input, setInput}) => {

  const [visibility ,setVisibility] = useState(false);

  const visibilityHandler = () =>{
    setVisibility(!visibility);
  }

  let inputElement;

  if(type === 'email'){
    inputElement = <div className="input">
                        <input type={type} placeholder="Email" value={input} onChange={(e) => setInput(e.target.value)}/>
                       </div>
  }else if(type === 'password'){
    inputElement = <div className="input">
                        <input type={visibility ? "text" : type} placeholder="Password" onChange={(e) => setInput(e.target.value)}/>
                        <span className="material-icons" onClick={visibilityHandler}>{visibility ? "visibility" : "visibility_off"}</span>
                       </div>
  }else{
    inputElement = <div className="input">
                        <input type={type} placeholder="Full Name" onChange={(e) => setInput(e.target.value)}/>
                       </div>
  }

  return inputElement
}

export default Input