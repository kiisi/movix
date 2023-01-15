import React from 'react'

const AuthHoc = (props) =>{
    let _tk = localStorage.getItem("_tk")
    console.log(_tk)
    return (
        <>
            {props.children}
        </>
    )
}

export default AuthHoc