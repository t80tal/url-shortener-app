import React from 'react'
import ReactDOM from 'react-dom'

import Backdrop from './Backdrop'
import ModalOverlay from './ModalOverlay'


const portalElement = document.getElementById('overlays')

// A generic modal with portal to 'overlays' div instead of 'root' (the modal accept styles from parent components, like ErrorModal and LoadingModal).
const Modal = ({ children, onClose, modalStyles, backdropStyles }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop styles={backdropStyles} onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay styles={modalStyles}>{children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    )
}

export default Modal