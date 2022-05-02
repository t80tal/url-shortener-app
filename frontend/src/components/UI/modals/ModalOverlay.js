import React from 'react'
import styled from 'styled-components'

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

    @media screen and (max-width: 1300px) {
        width: 90%;
        top: 1.5vh;
        left: 5%;
    }
`

const ModalOverlay = ({ children, styles }) => {
    return (
        <ModalWrapper style={styles} className='modal'>
            <div className='content'>{children}</div>
        </ModalWrapper>
    )
}


export default ModalOverlay