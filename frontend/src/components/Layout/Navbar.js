import React from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-store/ui'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/Navbar'
import { getNavbarItems, CollapseButton } from './layout-utils/'

const Navbar = () => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.ui.navbar.isOpen);
    const toggleNavbarMenu = () => {
        dispatch(uiActions.toggleNavbarCol())
    }

    return (
        <Wrapper>
            <h1 className='navbar-logo'>
                EZLink
            </h1>
            <div className='navbar-collapse-icon' onClick={toggleNavbarMenu}>
                <CollapseButton isOpen={isOpen} />
            </div>
            <ul className={`navbar-menu ${isOpen && 'navbar-menu-active'}`}>
                {getNavbarItems().map((item) => {
                    return (
                        <Link to={item.url} key={item.id} className={item.type === 'desktop' ? 'navbar-dekstop-btn' : 'navbar-mobile-btn'}>{item.title}</Link>
                    );
                })}
            </ul>
            <button className='navbar-btn'>Sign Up</button>
        </Wrapper>
    )
}

export default Navbar