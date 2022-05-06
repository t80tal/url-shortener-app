import { uiActions } from './ui'

// An error decalration function with timer of 1600ms.
export const setErrorModal = (message) => {
    return (dispatch) => {
        dispatch(uiActions.toggleErrorModal(message))
        setTimeout(() => {
            dispatch(uiActions.toggleErrorModal())
        }, 1600)
    }
}
