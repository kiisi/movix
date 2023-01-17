import React, { useState, useEffect } from 'react'
import { endpoint } from '../utils/endpoints'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import authSlice  from '../store/slices/authSlice'
import './AuthHoc.scss'

const AuthHoc = (props) => {
    const [auth, setAuth] = useState(null)
    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { authUpdate } = authSlice.actions
    const navigate = useNavigate()

    const _tk = localStorage.getItem("_tk") || authState.token


    useEffect(() => {
        console.log(authState.token)
        if(!_tk){
            return navigate('/login')
        }
        fetch(endpoint, {
            method: 'get',
            headers: {
                "Authorization": "Bearer " + _tk
            }
        })
            .then(res => {
                console.log(res)
                if(!res.ok){
                    return navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.success) {
                    dispatch(authUpdate(data))
                    setAuth(true)
                } else {
                    navigate('/login')
                    setAuth(false)
                }
            })
            .catch(error => console.log(error))

    },[_tk, authState.token])

    let loader = <div className="scaffold__loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>


    return <>{ auth ? props.children : loader}</>

}

// return <>
//         {
//             loading ? 
//             loader
//             :
//                 auth ?
//                     props.children
//                     :
//                     auth == null ? loader : <div className="scaffold_re-login"><div><h1>Access denied</h1><p onClick={() => navigate('/login')}>Login</p></div></div>

//         }
//     </>

export default AuthHoc