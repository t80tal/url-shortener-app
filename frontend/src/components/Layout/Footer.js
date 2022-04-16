import React from 'react'
import getFooterItems from './layout-utils/footerItems'
import { Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/Footer'

const Footer = () => {
  return (
    <Wrapper>
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