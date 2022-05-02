import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
import ModalOverlay from './ModalOverlay'


const portalElement = document.getElementById('overlays')

// Modal with portal to 'overlays' div instead of 'root' (the modal accept styles if there's).
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