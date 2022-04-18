import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home, Login, Register, ForgotPassword, WhyUs, Tutorial, Campaigns, Urls } from './pages'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard'

// All routes.
const AppRoutes = () => {

    // Location for Framer-Motion.
    const location = useLocation()
    const isLoggedIn = useSelector(state => state.auth.token)


    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                {/* Logged out routes (like Bitly)*/}
                < Route exact path='*' element={<div>Not Found</div>} />
                {!isLoggedIn && (
                    <>
                        {/* Main */}
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/why-us' element={<WhyUs />} />
                        <Route exact path='/tutorial' element={<Tutorial />} />
                        {/* Auth */}
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/register' element={<Register />} />
                        <Route exact path='/forgot-password' element={<ForgotPassword />} />
                        {/* Logged in routes */}
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <Route exact path='/' element={<Dashboard />} />
                        <Route exact path='/campaigns' element={<Campaigns />} />
                        <Route exact path='/urls' element={<Dashboard />} />
                    </>
                )}
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes;