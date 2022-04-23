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
                    target: 'dashboard'
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

const setAlert = (alertData, dispatch) => {
    setTimeout(() => {
        dispatch(uiActions.removeAlert())
    }, 3000)
    dispatch(uiActions.setAlert(alertData))
}
