import React from 'react'
import { useSelector } from 'react-redux'

import { Navbar, Footer, Main, Sidebar, SearchBar } from './'

// Main layout for either logged in user or logged out user.
const Layout = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.token)

    return (
        <>
            {!isLoggedIn && <Navbar />}
            {isLoggedIn && <><SearchBar /><Sidebar /></>}
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default Layout