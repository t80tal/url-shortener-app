import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
    token: localStorage.getItem('token'),
    user: {
        urls: {}
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        },
        setUrls(state, action) {
            state.user.urls = action.payload
        },
        logoutHandler(state) {
            state.user.urls = {}
            state.token = null
            localStorage.removeItem('token')
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer