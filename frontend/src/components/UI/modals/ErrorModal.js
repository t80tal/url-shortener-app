import React from 'react'
import { useSelector } from 'react-redux'

import Wrapper from '../../../assets/wrappers/modals/ErrorModal'
import Modal from './basemodal/Modal'

// Custom styles for the error modal.
const errorModalStyles = {
    background: 'inherit',
    color: '#721c24',
    boxShadow: 'inset 0px 0px 0px 1px #fcabb3',
    backgroundColor: '#f8d7da',
    top: '35vh',
    display: 'flex',
    width: '350px',
    left: 'calc(50% - 175px)',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '40px',
    padding: '2rem 0'
}

const errorBackdropStyles = {
    display: 'none'
}

// Error modal.
const ErrorModal = () => {
    const errorMsg = useSelector(state => state.ui.error.msg)
    return (
        <Modal modalStyles={errorModalStyles} backdropStyles={errorBackdropStyles}>
            <Wrapper>
                <h3>UH OH, THERE WAS AN ERROR</h3>
                <span>{errorMsg || 'invalid url'}</span>
            </Wrapper>
        </Modal>
    )
}

export default ErrorModal