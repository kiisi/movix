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
        console.log("Requesting...")

        const xhr = new XMLHttpRequest()
        xhr.open('get', endpoint, true)
        xhr.setRequestHeader("Authorization", "Bearer " + _tk)
        // xhr.timeout = 2000

        xhr.onload = function () {
            console.log("Loading...")
            const data = JSON.parse(xhr.response)
            console.log(data)
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
            console.log("Error...")
            toast.error("An error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
            setAuth(false)
            navigate('/login')
        }
        xhr.ontimeout = function () {
            console.log("Timeout...")
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

// useEffect(() => {
//         if(!_tk){
//             return navigate('/login')
//         }
//         fetch(endpoint, {
//             method: 'get',
//             headers: {
//                 "Authorization": "Bearer " + _tk
//             }
//         })
//             .then(res => {
//                 return res.json()
//             })
//             .then(data => {
//                 if (data.success) {
//                     setAuth(true)
//                     return dispatch(authUpdate(data))
//                 }else{
//                     setAuth(false)
//                     navigate('/login')
//                     return toast.error(data.error, {
//                         position: toast.POSITION.TOP_RIGHT
//                     });
//                 }
//             })
//             .catch(error => console.log(error))

//     },[_tk])