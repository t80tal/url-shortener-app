import React from 'react'
import { Navbar, Footer, Main } from './'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <Main>
                {children}
            </Main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout