import React from 'react'

import Wrapper from '../../../../assets/wrappers/modals/ModalOverlay'

// The modal overylay.
const ModalOverlay = ({ children, styles }) => {
    return (
        <Wrapper style={styles}>
            {children}
        </Wrapper>
    )
}


export default ModalOverlay