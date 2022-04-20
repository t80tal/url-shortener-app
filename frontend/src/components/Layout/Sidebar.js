import React from 'react'
import Wrapper from '../../assets/wrappers/Sidebar'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-store/auth';

const Sidebar = () => {

  const pathname = useLocation().pathname;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(authActions.logoutHandler())
  }

  return (
    <Wrapper>
      <h1 className='sidebar-logo' onClick={() => { navigate('/dashboard') }}>
        EZLink
      </h1>
      <div className='items'>
        <div className='top-items'>
          <div className='sidebar-item-container'>
            <Link to='/dashboard' className={`sidebar-item ${pathname === '/dashboard' && 'active'}`}>
              <div className='item-icon-label'>
                <svg alt="Dashboard icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className='item-svg' viewBox="0 0 16 16">
                  <path alt="Dashboard icon" d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
                </svg>
                <h4>Dashboard</h4>
              </div>
            </Link>
          </div>

          <div className='sidebar-item-container'>
            <Link to='/campaigns' className={`sidebar-item ${pathname === '/campaigns' && 'active'}`}>
              <div className='item-icon-label'>
                <svg alt="Dashboard icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className='item-svg' viewBox="0 0 16 16">
                  <path alt="Dashboard icon" d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
                </svg>
                <h4>Campaigns</h4>
              </div>
            </Link>
          </div>
          <div className='sidebar-item-container'>
            <Link to='/urls' className={`sidebar-item ${pathname === '/urls' && 'active'}`}>
              <div className='item-icon-label'>
                <svg alt="Dashboard icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className='item-svg' viewBox="0 0 16 16">
                  <path alt="Dashboard icon" d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
                </svg>
                <h4>URL's</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className='bottom-items'>
          <div className='sidebar-item-container'>
            <Link to='/' className='sidebar-item'>
              <div className='item-icon-label'>
                <svg alt="Dashboard icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className='item-svg' viewBox="0 0 16 16">
                  <path alt="Dashboard icon" d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
                </svg>
                <h4>settings</h4>
              </div>
            </Link>
          </div>

          <div className='sidebar-item-container'>
            <div onClick={logoutHandler} className='sidebar-item'>
              <div className='item-icon-label'>
                <svg alt="Dashboard icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className='item-svg' viewBox="0 0 16 16">
                  <path alt="Dashboard icon" d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
                </svg>
                <h4>logout</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

export default Sidebar