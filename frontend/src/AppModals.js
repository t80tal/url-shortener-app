import React from 'react'
import { useSelector } from 'react-redux'

import { ErrorModal, LoadingModal } from './components'

// Seperate component to avoid rendering loop (if you refresh page then you fetch urls from db, 
// this action turning on the loading modal which render the app component and then can make a loop).
const AppModals = () => {
    // Checking current ui state (in case of showing loading/error modal).
    const uiState = useSelector(state => state.ui)

    return (
        <React.Fragment>
            {uiState.error.msg && < ErrorModal />}
            {uiState.isLoading && < LoadingModal />}
        </React.Fragment>
    )
}

export default AppModals