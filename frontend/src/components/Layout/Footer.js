import React from 'react'
import getFooterItems from './layout-utils/footerItems'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Wrapper from '../../assets/wrappers/Footer'

const Footer = () => {
  const isLoggedIn = useSelector(state => state.auth.token)

  return (
    <Wrapper style={isLoggedIn ? {background: 'inherit', color: 'rgb(110, 94, 254)', paddingLeft: '300px', width: 'auto'} : {}}>
      {
        getFooterItems().map(item => {
          return (
            <Link to={item.url} key={item.id} className={'footer-btn'}>{item.title}</Link>
          )
        })
      }
    </Wrapper>
  )
}

export default Footer