import React from 'react'
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

const Backdrop = ({ onClose, styles }) => {
    return <BackdropWrapper style={styles} className='backdrop' onClick={onClose} />
}

export default Backdrop