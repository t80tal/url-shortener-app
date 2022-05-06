import react from 'react'

import Wrapper from '../../assets/wrappers/SidebarItem'

// Sidebar button for executing a function.
const SidebarButton = ({ icon, label, target }) => {
    return (
        <Wrapper>
            <div onClick={target} className='sidebar-item'>
                <div className='item-icon-label'>
                    {icon}
                    <h4>{label}</h4>
                </div>
            </div>
        </Wrapper>
    )

}

export default SidebarButton