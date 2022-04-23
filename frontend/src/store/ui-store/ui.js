import { createSlice } from '@reduxjs/toolkit'

const initialUiState = {
    navbar: {
        isOpen: false
    },
    alert: {
        alertClass: '',
        msg: '',
        target: ''
    },
    modal: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        toggleNavbarCol(state) {
            state.navbar.isOpen = !state.navbar.isOpen
        },
        setAlert(state, action) {
            state.alert = {
                alertClass: action.payload.alertClass,
                msg: action.payload.msg,
                target: action.payload.target
            }
        },
        removeAlert(state) {
            state.alert = {
                alertClass: '',
                msg: '',
                target: ''
            }
        },
        toggleModal(state) {
            state.modal = !state.modal
        }
    }
})

export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer