import { authActions } from './auth'
import axios from 'axios'
import { uiActions } from '../ui-store/ui'
import { get_urls_by_token } from './auth-actions'

export const createLinkHandler = (longUrl) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                const { data } = await axios.post(`/urls/create/`, { longUrl }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                if (data && data.id && data.urlCode) {
                    setAlert({
                        alertClass: 'success',
                        msg: 'Created successfully...',
                        target: 'dashboard'
                    }, dispatch)
                    dispatch(get_urls_by_token())
                    return
                }
                setAlert({
                    alertClass: 'danger',
                    msg: 'Try again later.',
                    target: 'dashboard'
                }, dispatch)
                return
            } catch (error) {
                setAlert({
                    alertClass: 'danger',
                    msg: error.response.data.msg,
                    target: 'urls'
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

export const delete_url_by_id = (urlId) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                await axios.delete('/urls/' + urlId, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                dispatch(uiActions.toggleUrlModal())
                dispatch(get_urls_by_token())
                setAlert({
                    alertClass: 'success',
                    msg: 'Deleted succesfully.',
                    target: 'urls'
                }, dispatch)
                return
            } catch (error) {
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

export const edit_url_by_id = (longUrl, urlId) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            try {
                await axios.patch('/urls/' + urlId, { longUrl }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                dispatch(uiActions.toggleUrlModal())
                dispatch(get_urls_by_token())
                setAlert({
                    alertClass: 'success',
                    msg: 'Deleted succesfully.',
                    target: 'urls'
                }, dispatch)
                return
            } catch (error) {
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


const setAlert = (alertData, dispatch) => {
    setTimeout(() => {
        dispatch(uiActions.removeAlert())
    }, 3000)
    dispatch(uiActions.setAlert(alertData))
}
