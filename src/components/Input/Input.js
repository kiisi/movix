import React, {useState} from 'react'
import './Input.scss'

const Input = ({type}) => {

  const [visibility ,setVisibility] = useState(false);

  const visibilityHandler = () =>{
    setVisibility(!visibility);
  }

  let inputElement;

  if(type === 'email'){
    inputElement = <div className="input">
                        <input type={type} placeholder="Email"/>
                       </div>
  }else if(type === 'password'){
    inputElement = <div className="input">
                        <input type={type} placeholder="Password"/>
                        <span className="material-icons" onClick={visibilityHandler}>{visibility ? "visibility" : "visibility_off"}</span>
                       </div>
  }else{
    inputElement = <div className="input">
                        <input type={type} placeholder="Full Name"/>
                       </div>
  }

  return inputElement
}

export default Input