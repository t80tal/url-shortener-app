import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Wrapper from '../assets/wrappers/NotFound'
import BasePage from './BasePage'
import notFoundImage from '../assets/images/404.svg'

const NotFound = () => {
    // If logged in the the redirection is to the dashboard else to the home page.
    const isLoggedIn = useSelector(state => state.auth.token)

    return (
        <BasePage name='NotFound'>
            <Wrapper>
                <img src={notFoundImage} alt='Not found image by UnDraw.co' />
                <h3>
                    The page you're looking for is not found.
                </h3>
                {!isLoggedIn ? <Link to='/'>Go home</Link>
                    : <Link to='/dashboard'>Go home</Link>}
            </Wrapper>
        </BasePage>
    )
}


export default NotFound