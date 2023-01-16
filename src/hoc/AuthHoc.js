import React, { useState, useEffect } from 'react'
import { endpoint } from '../utils/endpoints'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import authSlice  from '../store/slices/authSlice'
import './AuthHoc.scss'

const AuthHoc = (props) => {
    const [loading, setLoading] = useState(false)
    const [auth, setAuth] = useState(null)
    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { authUpdate } = authSlice.actions
    const navigate = useNavigate()

    const _tk = authState.token || localStorage.getItem("_tk")

    useEffect(() => {
        setLoading(true)
        fetch(endpoint, {
            method: 'get',
            headers: {
                "Authorization": "Bearer " + _tk
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    dispatch(authUpdate(data))
                    setAuth(true)
                } else {
                    setAuth(false)
                }
            })
            .then(() => setLoading(false))
            .catch(error => console.log(error))

    },[_tk])

    let loader = <div className="scaffold__loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>

    return <>
        {
            loading ? 
            loader
            :
                auth ?
                    props.children
                    :
                    auth == null ? loader : <div className="scaffold_re-login"><div><h1>Access denied</h1><p onClick={() => navigate('/login')}>Login</p></div></div>

        }
    </>

}

export default AuthHoc