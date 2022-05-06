import { createSlice } from '@reduxjs/toolkit'

import { links } from './search-links';

// My ui state manager.
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
    isLoading: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        // Navbar collapse state.
        toggleNavbarCol(state) {
            state.navbar.isOpen = !state.navbar.isOpen
        },
        //Setting an alert for a specific page (target) when gets a message from the backend.
        setAlert(state, action) {
            state.alert = {
                alertClass: action.payload.alertClass,
                msg: action.payload.msg,
                target: action.payload.target
            }
        },
        //Removing the alert (usually I execute this automatically with a timeout function after setAlert).
        removeAlert(state) {
            state.alert = {
                alertClass: '',
                msg: '',
                target: ''
            }
        },
        //Toggling a nice looking error modal when gets an error from the frontend.
        toggleErrorModal(state, action) {
            action.payload ?
                state.error.msg = action.payload
                : state.error.msg = null
        },
        // Toggling an url modal (modal which you can edit your own short url or just look at stats).
        toggleUrlModal(state, action) {
            // Removing the alert that belongs to url editing if exists.
            state.alert = {
                alertClass: '',
                msg: '',
                target: ''
            }

            state.urlModal.modal ?
                state.urlModal = {
                    modal: false,
                    editingMode: false,
                    id: null
                } : state.urlModal = {
                    modal: true,
                    editingMode: false,
                    id: action.payload.id,
                    url: action.payload.url
                }
        },
        // In url modal you have option to edit its information, here you can enter this editing mode.
        toggleUrlModalEditingMode(state) {
            // Removing the alert that belongs to url editing if exists.
            state.alert = {
                alertClass: '',
                msg: '',
                target: ''
            }

            state.urlModal.editingMode = !state.urlModal.editingMode
        },
        // Toggling the account settings modal whenever you want to edit your information.
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
        // When someone use the search bar this will get trigger (onChange event) 
        // and filter for them the current results from the 'links' array from './search-links.js' .
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

        },
        // Every action that required a loading supposed to use these functions.
        openLoadingModal(state) {
            state.isLoading = true
        },
        closeLoadingModal(state) {
            state.isLoading = false
        },
    }
})

export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer