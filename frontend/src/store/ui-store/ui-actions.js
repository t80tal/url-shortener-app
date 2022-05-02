import { uiActions } from "./ui"

export const setErrorModal = (message) => {
    return (dispatch) => {
        dispatch(uiActions.toggleErrorModal(message))
        setTimeout(() => {
            dispatch(uiActions.toggleErrorModal())
        }, 900)
    }
}
