import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../auth-store/auth';
import { links } from './search-links';

const initialUiState = {
    navbar: {
        isOpen: false
    },
    alert: {
        alertClass: '',
        msg: '',
        target: ''
    },
    error: {
        msg: null
    },
    settingsModal: {
        modal: false,
        settingsOption: null
    }
    ,
    urlModal: {
        modal: false,
        editingMode: false,
        id: null
    },
    searchBar: {
        value: '',
        isOpen: false,
        results: []
    },
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
        toggleErrorModal(state, action) {
            action.payload ?
                state.error.msg = action.payload
                : state.error.msg = null
        },
        toggleUrlModal(state, action) {
            state.urlModal.modal ?
                state.urlModal = {
                    modal: false,
                    editingMode: false,
                    id: null
                } : state.urlModal = {
                    modal: true,
                    editingMode: false,
                    id: action.payload
                }
        },
        toggleUrlModalEditingMode(state) {
            state.urlModal.editingMode = !state.urlModal.editingMode
        },
        toggleSettingsModal(state, action) {
            state.settingsModal.modal && !action.payload ?
                state.settingsModal = {
                    modal: false,
                    settingsOption: null
                }
                : state.settingsModal = {
                    modal: true,
                    settingsOption: action.payload
                }
        },
        onSearching(state, action) {
            state.searchBar.value = action.payload
            if (action.payload) {
                state.searchBar = {
                    value: action.payload,
                    isOpen: true,
                    results: links.filter(result => result.title.toLowerCase().includes(action.payload.toLowerCase()))
                }
            } else {
                state.searchBar = {
                    value: '',
                    isOpen: false,
                    results: []
                }
            }

        }
    }
})

export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer