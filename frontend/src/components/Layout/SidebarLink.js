import React from 'react'
import { Link } from 'react-router-dom'

import Wrapper from '../../assets/wrappers/SidebarItem'

// Sidebar link for navigation.
const SidebarLink = ({ to, isActive, icon, label }) => {
    return (
        <Wrapper>
            <Link to={to} className={`sidebar-item ${isActive && 'active'}`}>
                <div className='item-icon-label'>
                    {icon}
                    <h4>{label}</h4>
                </div>
            </Link>
        </Wrapper>
    )
}

export default SidebarLink