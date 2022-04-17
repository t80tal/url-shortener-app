import { authActions } from './auth'
import axios from 'axios'

export const login_with_credentials = (username, password) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                const { data } = await axios.post(`/auth/sign-in/`, { username, password })
                if (data && data.user.token) {
                    localStorage.setItem('token', data.user.token)
                }
            } catch (error) {
                console.log(error.response.data.msg)
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
                    localStorage.setItem('token', data.user.token)
                }
            } catch (error) {
                console.log(error.response.data.msg)
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
                    console.log(data)
                    dispatch(authActions.setUrls(data))
                }
            } catch (error) {
                console.log(error.response.data.msg)
                return
                // #TODO: alert on error 
                // dispatch(uiActions.disableLoading());
            }
        }
        // dispatch(uiActions.enableLoading());
        sendRequest();
    }
}