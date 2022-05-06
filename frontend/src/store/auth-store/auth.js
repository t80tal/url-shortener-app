import { createSlice } from '@reduxjs/toolkit'

// My main auth and user state.
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
        // Setting a JWT token with logging in.
        setToken(state, action) {
            localStorage.setItem('token', action.payload)
            state.token = action.payload
        },
        // Get own urls (every user has own urls).
        setUrls(state, action) {
            state.user.urls = action.payload
        },
        // on logout handler.
        logoutHandler(state) {
            state.user.urls = {}
            state.user.username = null
            state.token = null
            localStorage.removeItem('token')
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer