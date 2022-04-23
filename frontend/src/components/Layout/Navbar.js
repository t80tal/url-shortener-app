import React from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-store/ui'
import { useSelector } from 'react-redux'
import { generatePath, Link, useLocation } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/Navbar'
import { getNavbarItems, CollapseButton } from './layout-utils/'

const Navbar = () => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.ui.navbar.isOpen);
    const toggleNavbarMenu = () => {
        dispatch(uiActions.toggleNavbarCol())
    }
    // Current path for active class.
    const cur_path = useLocation().pathname.slice(1)

    return (
        <Wrapper>
            <Link to='/' className='navbar-logo'><h1>EZLink</h1></Link>
            <div className='navbar-collapse-icon' onClick={toggleNavbarMenu}>
                <CollapseButton isOpen={isOpen} />
            </div>
            <ul className={`navbar-menu ${isOpen && 'navbar-menu-active'}`}>
                {getNavbarItems().map((item) => {
                    return (
                        <Link to={item.url} key={item.id} className={`${item.type === 'desktop' ? 'navbar-dekstop-btn' : 'navbar-mobile-btn'} ${cur_path === item.url ? 'active' : ''}`}>{item.title}</Link>
                    );
                })}
            </ul>
            <Link to='register' className='navbar-btn'>Sign Up</Link>
        </Wrapper>
    )
}

export default Navbar