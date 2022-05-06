import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getFooterItems } from './'
import Wrapper from '../../assets/wrappers/Footer'

// Footer component.
const Footer = () => {
  const isLoggedIn = useSelector(state => state.auth.token)

  return (
    <Wrapper>
      <div className={`footer-bar ${isLoggedIn ? 'logged-in-footer' : 'logged-out-footer'}`}>
        {
          getFooterItems().map(item => {
            return (
              <Link to={item.url} key={item.id} className={'footer-btn'}>{item.title}</Link>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

export default Footer