import React from 'react'
import Wrapper from '../assets/wrappers/TmpCard'
import person from '../assets/images/person.svg'

const Card = () => {
    return (
        <Wrapper>
            <div>
                <img src={person} alt='An image of a person'/>
            </div>
            <div>
                Here with EZLink my life are much easier, I can simply manage my links.
            </div>
        </Wrapper>
    )
}

export default Card