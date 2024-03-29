import React, { useState, useEffect } from 'react'
import { endpoint } from '../utils/endpoints'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import authSlice from '../store/slices/authSlice'
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
        if (!_tk) {
            return navigate('/login')
        }

        const xhr = new XMLHttpRequest()
        xhr.open('get', endpoint)
        xhr.setRequestHeader("Authorization", "Bearer " + _tk)
        // xhr.timeout = 2000

        xhr.onload = function () {
            const data = JSON.parse(xhr.response)
            if (data.success) {
                dispatch(authUpdate(data))
                setAuth(true)
            } else {
                toast.error(data.error, {
                    position: toast.POSITION.TOP_RIGHT
                });
                setAuth(false)
                navigate('/login')
            }
        }
        xhr.onerror = function () {
            toast.error("An error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
            setAuth(false)
            navigate('/login')
        }
        xhr.ontimeout = function () {
            toast.error("An error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
            setAuth(false)
            navigate('/login')
        }

        xhr.send()

    }, [_tk])

    let loader = <div className="scaffold__loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>


    return <>{auth ? props.children : loader}</>

}

export default AuthHoc

