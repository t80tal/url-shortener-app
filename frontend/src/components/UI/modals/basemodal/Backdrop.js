import React from 'react'

import Wrapper from '../../../../assets/wrappers/modals/Backdrop'

// Modal backdrop.
const Backdrop = ({ onClose, styles }) => {
    return <Wrapper style={styles} onClick={onClose} />
}

export default Backdrop