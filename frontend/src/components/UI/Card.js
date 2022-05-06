import React from 'react'

import Wrapper from '../../assets/wrappers/Card'

// Card looking component (also accepts custom styles).
const Card = ({ styles, children }) => {
    return (
        <Wrapper styles={styles ? styles : {}}>
            {children}
        </Wrapper>
    )
}

export default Card