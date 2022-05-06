import axios from 'axios'

import { setAlert } from './auth-actions'
import { uiActions } from '../ui-store/ui'
import { get_urls_by_token } from './auth-actions'
import { authActions } from './auth'

// Create short link function.
export const createLinkHandler = (longUrl) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                // Open a loading modal.
                dispatch(uiActions.openLoadingModal())

                const { data } = await axios.post(`/urls/create/`, { longUrl }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })

                // Backend must return those variables.
                if (data && data.id && data.urlCode) {

                    // Alerting on success.
                    setAlert({
                        alertClass: 'success',
                        msg: 'Created successfully...',
                        target: 'urls'
                    }, dispatch)

                    // Update current urls after adding one (stop a loding modal function inside).
                    dispatch(get_urls_by_token())
                    return
                } else {
                    // You're not supposed to get in here but took it in case anyway.
                    throw new Error("Try again later.")
                }
            } catch (error) {
                // Stop a loading modal.
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
                    target: 'urls'
                }, dispatch)
                return
            }
        }
        // dispatch(uiActions.enableLoading());
        sendRequest();
    }
}

// Deleting url by its id function.
export const delete_url_by_id = (urlId) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                // Open a loading modal.
                dispatch(uiActions.openLoadingModal())

                await axios.delete('/urls/' + urlId, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })

                // Close the current opened modal and update the current urls after deleting one.
                // In the get urls function there's a function to close the loading modal.
                dispatch(uiActions.toggleUrlModal())
                dispatch(get_urls_by_token())

                // Alerting on success.
                setAlert({
                    alertClass: 'success',
                    msg: 'Deleted succesfully.',
                    target: 'urls'
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
                    target: 'urls'
                }, dispatch)
                return
            }
        }
        sendRequest();
    }
}

// Editing url by id function.
export const edit_url_by_id = (longUrl, urlId) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                // Open a loading modal.
                dispatch(uiActions.openLoadingModal())

                await axios.patch('/urls/' + urlId, { longUrl }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })

                // Close the current opened modal and update the current urls after updating one.
                // In the get urls function there's a function to close the loading modal. 
                dispatch(uiActions.toggleUrlModal())
                dispatch(get_urls_by_token())

                // Alerting on success.
                setAlert({
                    alertClass: 'success',
                    msg: 'Deleted succesfully.',
                    target: 'editingUrls'
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
                    target: 'editingUrls'
                }, dispatch)
                return
            }
        }
        sendRequest();
    }
}

// Check url before redirection.
export const check_url_by_code = (path, navigate) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                dispatch(uiActions.openLoadingModal())
                const { data } = await axios.get('/' + path)
                if (data && data.url) {
                    // No need for closing the loading modal because you'll be redirected.
                    window.location.replace(data.url)
                }
            } catch {
                navigate('/not-found')
                dispatch(uiActions.closeLoadingModal())
            }
        }
        sendRequest();
    }
}