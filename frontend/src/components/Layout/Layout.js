import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Footer, Main, Sidebar, SearchBar } from './'

const Layout = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.token)
    return (
        <React.Fragment>
            {!isLoggedIn && <Navbar />}
            {isLoggedIn && <SearchBar />}
            {isLoggedIn && <Sidebar />}
            <Main>
                {children}
            </Main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout