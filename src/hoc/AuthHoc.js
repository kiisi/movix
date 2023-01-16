import React, { useState, useEffect } from 'react'
import { endpoint } from '../utils/endpoints'
import { redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthHoc = (props) => {
    const [loading, setLoading] = useState(false)
    const [auth, setAuth] = useState(null)
    const authState = useSelector((state) => state.auth)
    console.log(authState.token)

    const _tk = authState.token || localStorage.getItem("_tk")
    console.log(_tk)

    useEffect(()=>{
        setLoading(true)
        fetch(endpoint, {
            method: 'get',
            headers: {
                "Authorization": "Bearer " + _tk
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    setAuth(true)
                }else{
                    setAuth(false)
                }
            })
            .then(()=> setLoading(false))
            .catch(error => console.log(error))

        },[_tk])
    
    return <>
        {
            loading ? 
            <h1>Loading...</h1>
            :
            auth ? 
            props.children
            :
            auth == null ? <h1>...</h1> : <h1>Not allowed</h1>

        }
    </>

}

export default AuthHoc