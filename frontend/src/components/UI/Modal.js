import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const BackdropWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`

const ModalWrapper = styled.div`
    position: fixed;
    top: 5vh;
    width: 70%;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    left: 15%;
    animation: slide-down 300ms ease-out forwards;
`

const Backdrop = ({ onClose }) => {
    return <BackdropWrapper className='backdrop' onClick={onClose} />
}

const ModalOverlay = ({ children }) => {
    return (
        <ModalWrapper className='modal'>
            <div className='content'>{children}</div>
        </ModalWrapper>
    )
}

const portalElement = document.getElementById('overlays')

// Modal with portal to 'overlays' div instead of 'root' and with option for long modal.
const Modal = ({ children, onClose }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    )
}

export default Modal