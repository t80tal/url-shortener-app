import { authActions } from './auth'
import axios from 'axios'
import { uiActions } from '../ui-store/ui'

export const login_with_credentials = (username, password, navigate) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                const { data } = await axios.post(`/auth/sign-in/`, { username, password })
                if (data && data.user.token && data.user.username) {
                    const token = data.user.token
                    const username = data.user.username
                    setAlert({
                        alertClass: 'success',
                        msg: 'Logged in successfully...',
                        target: 'login'
                    }, dispatch)
                    dispatch(authActions.setToken(token))
                    localStorage.setItem('token', token)
                    dispatch(authActions.setUsername(username))
                    localStorage.setItem('username', username)
                    dispatch(get_urls_by_token())
                    navigate('/dashboard')
                }
            } catch (error) {
                setAlert({
                    alertClass: 'danger',
                    msg: error.response.data.msg,
                    target: 'login'
                }, dispatch)
                return
                // #TODO: alert on error 
                // dispatch(uiActions.disableLoading());
            }
        }
        // dispatch(uiActions.enableLoading());
        sendRequest();
    }
}

export const register_with_credentials = (name, email, username, password) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                const { data } = await axios.post(`/auth/sign-up/`, { username, email, password, name })
                if (data && data.user.token) {
                    setAlert({
                        alertClass: 'success',
                        msg: 'Registered successfully...',
                        target: 'register'
                    }, dispatch)
                    localStorage.setItem('token', data.user.token)
                }
            } catch (error) {
                setAlert({
                    alertClass: 'danger',
                    msg: error.response.data.msg,
                    target: 'register'
                }, dispatch)
                return
                // #TODO: alert on error 
                // dispatch(uiActions.disableLoading());
            }
        }
        // dispatch(uiActions.enableLoading());
        sendRequest();
    }
}

export const get_urls_by_token = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                const { data } = await axios.get(`/urls/`, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                if (data) {
                    dispatch(authActions.setUrls(data))
                }
            } catch (error) {
                console.log(error.response.data.msg)
                dispatch(authActions.setToken(null))
                localStorage.removeItem('token')
                return
                // #TODO: alert on error 
                // dispatch(uiActions.disableLoading());
            }
        }
        // dispatch(uiActions.enableLoading());
        sendRequest();
    }
}

const setAlert = (alertData, dispatch) => {
    setTimeout(() => {
        dispatch(uiActions.removeAlert())
    }, 3000)
    dispatch(uiActions.setAlert(alertData))
}