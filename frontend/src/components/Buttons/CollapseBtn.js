import React from 'react'

// Collapse button for navbar (on mobile mode)
const CollapseBtn = ({ isOpen }) => {
    if (isOpen) {
        return (
            <svg alt='an X icon for closing navbar menu.' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='navbar-collapse-svg' viewBox='0 0 16 16'>
                <path fillRule='evenodd' d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z' />
                <path fillRule='evenodd' d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z' />
            </svg>)
    }
    else {
        return (
            <svg alt='a 3 lines icon for opening navbar menu.' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='navbar-collapse-svg' viewBox='0 0 16 16'>
                <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
            </svg>
        )
    }
}

export default CollapseBtn