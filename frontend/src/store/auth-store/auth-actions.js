import axios from 'axios'

import { authActions } from './auth'
import { uiActions } from '../ui-store/ui'

// Login with credentials function(and navigating on success)
export const login_with_credentials = (username, password, navigate) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                // Open loading modal.
                dispatch(uiActions.openLoadingModal())
                const { data } = await axios.post(`/auth/sign-in/`, { username, password })
                if (data && data.user.token) {
                    const { token } = data.user

                    // Alerting success.
                    setAlert({
                        alertClass: 'success',
                        msg: 'Logged in successfully...',
                        target: 'login'
                    }, dispatch)

                    // Set JWt token in local storage and in state.
                    dispatch(authActions.setToken(token))

                    // Get own urls (stop loading function inside).
                    dispatch(get_urls_by_token())

                    // If you logged in after you used the quick shorten input in the home page
                    // then you're redirected directly to the create-url page to continue your proccess.
                    if (localStorage.getItem('tmp-given-url')) {
                        navigate('/urls')
                        return
                    }

                    // Else you're redirected the the dashboard (the home page for logged in users).
                    navigate('/dashboard')
                } else {
                    // You're not supposed to get in here but took it in case anyway.
                    throw new Error('Try again later.')
                }
            } catch (error) {
                // Close loading modal.
                dispatch(uiActions.closeLoadingModal())

                // Alerting an error (with message from the backend).
                setAlert({
                    alertClass: 'danger',
                    msg: error.response.data.msg,
                    target: 'login'
                }, dispatch)
                return
            }
        }
        sendRequest();
    }
}

// Register with credentials function(and navigating on success)
export const register_with_credentials = (name, email, username, password, navigate) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            // Open loading modal.
            dispatch(uiActions.openLoadingModal())
            try {
                const { data } = await axios.post(`/auth/sign-up/`, { username, email, password, name })
                if (data && data.user.token) {
                    const { token } = data.user

                    // Alerting success.
                    setAlert({
                        alertClass: 'success',
                        msg: 'Registered successfully...',
                        target: 'register'
                    }, dispatch)

                    // Set JWTtoken in local storage and in state.
                    dispatch(authActions.setToken(token))

                    // Close a loading modal.
                    dispatch(uiActions.closeLoadingModal())

                    // If you registered after you used the quick shorten input in the home page
                    // then you're redirected directly to the create-url page to continue your proccess.
                    if (localStorage.getItem('tmp-given-url')) {
                        navigate('/urls')
                        return
                    }

                    // Else you're redirected the the dashboard (the home page for logged in users).
                    navigate('/dashboard')
                } else {
                    // You're not supposed to get in here but took it in case anyway.
                    throw new Error('Try again later.')
                }
            } catch (error) {
                // Close loading modal.
                dispatch(uiActions.closeLoadingModal())

                // Alerting an error (with message from the backend).
                setAlert({
                    alertClass: 'danger',
                    msg: error.response.data.msg,
                    target: 'register'
                }, dispatch)
                return
            }
        }
        sendRequest();
    }
}

// Getting own urls for the current user (using the JWT token)
export const get_urls_by_token = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                // Open a loading modal.
                dispatch(uiActions.openLoadingModal())

                const { data } = await axios.get(`/urls/`, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })

                // Inserting the data to the state.
                if (data) {
                    dispatch(authActions.setUrls(data))

                    // Close a loading modal.
                    dispatch(uiActions.closeLoadingModal())
                } else {
                    // You're not supposed to get in here but took it in case anyway.
                    throw new Error('Try again later.')
                }
            } catch (error) {
                // Close a loading modal.
                dispatch(uiActions.closeLoadingModal())

                // If you got an unauthorization error then your JWT token might expired
                // your token will be removed with a message of session expired
                dispatch(authActions.setToken(null))
                localStorage.removeItem('token')
                return
            }
        }
        // dispatch(uiActions.enableLoading());
        sendRequest();
    }
}

// Update current user information by type(update: password/ email or name).
export const update_user = (type, oldPassword, newValue) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                // Open a loading modal.
                dispatch(uiActions.openLoadingModal())

                await axios.patch('/auth/update-' + type, {
                    [type]: newValue,
                    oldPassword
                }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                // Close a loading modal.
                dispatch(uiActions.closeLoadingModal())
                // Alerting on success.
                setAlert({
                    alertClass: 'success',
                    msg: 'Updated succesfully.',
                    target: 'settings'
                }, dispatch)
                return
            } catch (error) {
                // Close a loading modal.
                dispatch(uiActions.closeLoadingModal())
                // Check if session expried.
                if (error.response.status === 401) {
                    setAlert({
                        alertClass: 'danger',
                        msg: 'Login session expired.',
                        target: 'login'
                    }, dispatch)
                    dispatch(authActions.logoutHandler())
                    return
                }
                // Alerting an error (with a message from the backend).
                setAlert({
                    alertClass: 'danger',
                    msg: error.response.data.msg,
                    target: 'settings'
                }, dispatch)
                return
            }
        }
        sendRequest();
    }
}

// When I want to show an alert for 3000ms.
// I'm exporting this because I'm gonna use it in './user-actions.js'
export const setAlert = (alertData, dispatch) => {
    setTimeout(() => {
        dispatch(uiActions.removeAlert())
    }, 5000)
    dispatch(uiActions.setAlert(alertData))
}
