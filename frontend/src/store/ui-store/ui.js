import { createSlice } from '@reduxjs/toolkit'

const initialUiState = {
    navbar: {
        isOpen: false
    }
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        toggleNavbarCol(state) {
            state.navbar.isOpen = !state.navbar.isOpen
        }
    }
})

export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer