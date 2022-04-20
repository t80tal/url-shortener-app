import React from 'react'
import Wrapper from '../../assets/wrappers/Card'

const Card = ({ styles, children }) => {
    return (
        <Wrapper styles={styles ? styles : {}}>
            {children}
        </Wrapper>
    )
}

export default Card