import {createSlice} from '@reduxjs/toolkit';


let initState = {
    token: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        authLogin: (state, action) =>{
            state.token = action.payload.token
            state.user = action.payload.user

            localStorage.setItem("_tk", state.token)
        },
        authUpdate: (state, action) =>{
            state.token = localStorage.getItem("_tk")
            state.user = action.payload.user
        }
    }
})

export default authSlice