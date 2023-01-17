import React, { useState, useEffect } from 'react'
import { endpoint } from '../utils/endpoints'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import authSlice  from '../store/slices/authSlice'
import './AuthHoc.scss'
import { toast } from 'react-toastify';

const AuthHoc = (props) => {
    const [auth, setAuth] = useState(null)
    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { authUpdate } = authSlice.actions
    const navigate = useNavigate()

    const _tk = localStorage.getItem("_tk") || authState.token

    useEffect(() => {
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
                // if(!res.ok){
                //     return navigate('/login')
                // }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.success) {
                    dispatch(authUpdate(data))
                    setAuth(true)
                    return toast.success(data.success, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
                setAuth(false)
                navigate('/login')
                return toast.error(data.error, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .catch(error => console.log(error))

    },[_tk])

    let loader = <div className="scaffold__loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>
    console.log(auth)


    return <>{ auth ? props.children : loader}</>

}

export default AuthHoc