import React from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

const errorModalStyles = {
    background: 'inherit',
    color: '#721c24',
    boxShadow: 'inset 0px 0px 0px 1px #fcabb3',
    backgroundColor: '#f8d7da',
    top: '35vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '40px',
    padding: '2rem 0'
}

const errorBackdropStyles = {
    display: 'none'
}

const ErrorModal = () => {
    const errorMsg = useSelector(state => state.ui.error.msg)
    return (
        <Modal modalStyles={errorModalStyles} backdropStyles={errorBackdropStyles}>
            {errorMsg}
        </Modal>
    )
}

export default ErrorModal