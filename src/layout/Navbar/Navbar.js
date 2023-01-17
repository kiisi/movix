import React, {useState} from 'react'
import './Navbar.scss'
import tv from '../../assets/tv.png'
import { useSelector } from 'react-redux'
import LogoutModal from '../../portals/LogoutModal'
import {useDispatch} from 'react-redux'
import authSlice from '../../store/slices/authSlice';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const fullname = useSelector((state) => state.auth).user.fullname
  const [click, setClick] = useState(false)
  const dispatch = useDispatch()
  const authState = authSlice.actions

  const showModalBottomSheet = () =>{
    setClick(!click)
  }

  const logout = () =>{
    dispatch(authState.authLogout())
    navigate('/login')
  }

  let name = fullname.split(" ")[0].split("").slice(0, 7).join("")

  return (
    <>
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
            <div className="nav__profile--name">{name}{fullname.length > 7 ? '...': ''}</div>
            <div className="nav__profile--menu" onClick={showModalBottomSheet}>
              <div className="nav__profile--menu__lines"></div>
            </div>
        </div>
    </div>
    <LogoutModal>
      <div className={click ? "modal__logout active" :"modal__logout"}>
        <div className="btn__auth" onClick={logout}>Logout</div>
      </div>
      <div className={click ? "modal__backdrop active" : "modal__backdrop"} onClick={showModalBottomSheet}></div>
    </LogoutModal>
    </>
    
  )
}

export default Navbar