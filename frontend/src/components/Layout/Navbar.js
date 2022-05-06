import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { uiActions } from '../../store/ui-store/ui'
import Wrapper from '../../assets/wrappers/Navbar'
import { getNavbarItems, CollapseBtn } from './'

// Navbar component.
const Navbar = () => {
    // In mobile mode the navbar becomes collapsable (isOpen is the state for this action).
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.ui.navbar.isOpen)
    const toggleNavbarMenu = () => {
        dispatch(uiActions.toggleNavbarCol())
    }

    // Getting current path for active css class.
    const cur_path = useLocation().pathname.slice(1)

    return (
        // Getting navbar items from utils.
        <Wrapper>
            <Link to='/' className='navbar-logo'><h1>EZLink</h1></Link>
            <div className='navbar-collapse-icon' onClick={toggleNavbarMenu}>
                <CollapseBtn isOpen={isOpen} />
            </div>
            <ul className={`navbar-menu ${isOpen && 'navbar-menu-active'}`}>
                {getNavbarItems().map((item) => {
                    return (
                        <Link to={item.url} onClick={toggleNavbarMenu} key={item.id} className={`${item.type === 'desktop' ? 'navbar-dekstop-btn' : 'navbar-mobile-btn'} ${cur_path === item.url ? 'active' : ''}`}>{item.title}</Link>
                    )
                })}
            </ul>
            <Link to='register' className='navbar-btn'>Sign Up</Link>
        </Wrapper>
    )
}

export default Navbar